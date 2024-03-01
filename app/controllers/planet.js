// Import the Planet model
const { Planet } = require('../models')

// Show all resources
const index = async (req, res) => {
  // Respond with an array and 2xx status code
  try {
    const planets = await Planet.findAll()
    res.status(200).json(planets)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Show resource
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
  console.log(req)
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
module.exports = { index, show, create, update, remove }