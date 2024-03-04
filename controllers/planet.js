// Import the Planet model
const { Planet, Star } = require('../models')

// Show all resources
const index = async (req, res) => {
  // Respond with an array and 2xx status code
  try {
    const planets = await Planet.findAll()
    res.status(200).render('views/Planet/index.html.twig', {
      title: 'Planets',
      planets: planets
    });
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Show form to create new resource
const showForm = async(req, res) => {
  const { id } = req.params;
  let planet;
  let selectedStarIds = [];
  if (id) {
    planet = await Planet.findOne({ where: { id }, include: [
      {
        model: Star,
        through: {attributes: []}
      }
    ] });
    selectedStarIds = planet.Stars.map(star => star.id);
  }
  const stars = await Star.findAll();
  res.render("views/Planet/planetForm.html.twig", { planet, stars, selectedStarIds });
} 

// Show one resource
const show = async (req, res) => {
  // Respond with a single object and 2xx code
  const { id } = req.params
  try {
    const planet = await Planet.findByPk(id)
    if (!planet) {
      res.status(404).json({ error: 'Planet not found' })
    } else {
      res.status(200).json(planet)
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}


// Create a new resource
const create = async (req, res) => {
  // Issue a redirect with a success 2xx code
  try {
    const newPlanet = await Planet.create(req.body)
    res.status(201).json(newPlanet)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Update an existing resource
const update = async (req, res) => {
  // Respond with a single resource and 2xx code
  const { id } = req.params
  try {
    const [updated] = await Planet.update(req.body, {
      where: { id: id }
    })
    if (updated) {
      const updatedPlanet = await Planet.findByPk(id)
      res.status(200).json(updatedPlanet)
    } else {
      res.status(404).json({ error: 'Planet not found' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Remove a single resource
const remove = async (req, res) => {
  // Respond with a 2xx status code and bool
  const { id } = req.params
  try {
    const deleted = await Planet.destroy({
      where: { id: id }
    })
    if (deleted) {
      return res.status(201).json({ success: true });
    } else {
      res.status(404).json({ error: 'Planet not found' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}



// Export all controller actions
module.exports = { index, show, create, update, remove, showForm }