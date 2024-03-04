const { Planet, Star, StarsPlanets, Sequelize } = require("../models/index");

// Show all resources
const index = async (req, res) => {
  const planets = await Planet.findAll({
    include: [
      {
        model: Star,
        through: { attributes: [] },
      },
    ],
  });
  if (res.locals.asJson) {
    // Respond with an array and 2xx status code
    res.status(200).json(planets);
    return;
  }

  res.status(200).render("views/Planet/index.html.twig", {
    planets,
  });
};

// Show resource
const show = async (req, res) => {
  const { id } = req.params;
  const planet = await Planet.findOne({
    where: { id },
    include: [
      {
        model: Star,
        through: { attributes: [] },
      },
    ],
  });
  if (res.locals.asJson) {
    // Respond with a single object and 2xx code
    res.status(200).json(planet);
    return;
  }

  res.status(200).render("views/Planet/planet.html.twig", {
    planet,
  });
};

const form = async (req, res) => {
  const { id } = req.params || -1;
  let planet;
  let selectedStarIds = [];
  if (id >= 0) {
    planet = await Planet.findOne({
      where: { id },
      include: [
        {
          model: Star,
          through: { attributes: [] },
        },
      ],
    });
    selectedStarIds = planet.Stars.map((star) => star.id);
  }
  const stars = await Star.findAll();
  res.render("views/Planet/planetForm.html.twig", {
    planet,
    stars,
    selectedStarIds,
  });
};

// Create a new resource
const create = async (req, res, next) => {
  const { body } = req;
  const { starIds } = body;

  const planet = await Planet.create(body);
  await planet.addStars(starIds);

  req.planetId = planet.id;
  next();

  if (res.locals.asJson) {
    // Issue a redirect with a success 2xx code
    res.redirect(201, "/planets");
    return;
  }

  res.redirect(303, `/planets`);
};

// Update an existing resource
const update = async (req, res, next) => {
  const { body } = req;
  const { id } = req.params;
  const starIds =
    typeof body.starIds === "string" ? [body.starIds] : body.starIds || [];
  await Planet.update(body, { where: { id } });
  starIds.forEach(async (starId) => {
    await StarsPlanets.findOrCreate({ where: { planetId: id, starId } });
  });
  const Op = Sequelize.Op;
  await StarsPlanets.destroy({
    where: { planetId: id, starId: { [Op.notIn]: starIds } },
  });

  req.planetId = id;
  next();

  if (res.locals.asJson) {
    // Respond with a single resource and 2xx code
    res.status(200).json(`/planets/${req.params.id}`);
    return;
  }

  res.redirect(303, `/planets`);
};

// Remove a single resource
const remove = async (req, res) => {
  const { id } = req.params;
  await StarsPlanets.destroy({ where: { planetId: id } });
  await Planet.destroy({ where: { id } });
  if (res.locals.asJson) {
    // Respond with a 2xx status code and bool
    res.status(204).json(true);
    return;
  }

  res.redirect(303, "/planets");
};

// Export all controller actions
module.exports = { index, show, form, create, update, remove };
