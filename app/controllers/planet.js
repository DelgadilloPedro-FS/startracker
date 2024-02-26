//import models
const { Planet, Star } = require("../models/index");

// Show all resources
const index = async (req, res) => {
  // return all planets
  const planets = await Planet.findAll({
    include: [
      {
        model: Star,
        through: { attributes: [] },
      },
    ],
  });
  // Respond with an array and 2xx status code
  res.status(200).json(planets);
};

// Show resource
const show = async (req, res) => {
  //grab id from parms
  const { id } = req.params;
  //search for one planet with the id
  const planet = await Planet.findOne({ where: { id }, include: [
    {
      model: Star,
      through: {attributes: []}
    }
  ] });
  // Respond with a single object and 2xx code
  res.status(200).json(planet);
};

// Create a new resource
const create = async (req, res) => {
  const {name, size, description} = req.body
  const planet = await Planet.create({name, size, description})
  // Issue a redirect with a success 2xx code
  res.redirect(`/planets`, 201);
};

// Update an existing resource
const update = async (req, res) => {
  //grab id from params 
  const {id} = req.params;
  //grab info from body
  const {name, size, description} = req.body;
  //update planet by id
  const planet = await Planet.update({name, size, description}, {
    where: {id}
  })
  // Respond with a single resource and 2xx code
  res.status(200).json(planet);
};

// Remove a single resource
const remove = async (req, res) => {
  //grab id from params
  const {id} = req.params
  //remove by id 
  const remove = await Planet.destroy({where: {id}});
  // Respond with a 2xx status code and bool
  res.status(204).json(true);
};

// Export all controller actions
module.exports = { index, show, create, update, remove };
