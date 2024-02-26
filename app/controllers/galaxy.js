// Import the Galaxy model
const { Galaxy } = require('../models')

// Show all resources
const index = async (req, res) => {
  // Respond with an array and 2xx status code
  try {
    const galaxies = await Galaxy.findAll()
    res.status(200).json(galaxies)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Show resource
const show = async (req, res) => {
  // Respond with a single object and 2xx code
  const { id } = req.params
  try {
    const galaxy = await Galaxy.findByPk(id)
    if (!galaxy) {
      res.status(404).json({ error: 'Galaxy not found' })
    } else {
      res.status(200).json(galaxy)
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Create a new resource
const create = async (req, res) => {
  // Issue a redirect with a success 2xx code
  try {
    const newGalaxy = await Galaxy.create(req.body)
    res.status(201).json(newGalaxy)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Update an existing resource
const update = async (req, res) => {
  // Respond with a single resource and 2xx code
  const { id } = req.params
  try {
    const [updated] = await Galaxy.update(req.body, {
      where: { id: id }
    })
    if (updated) {
      const updatedGalaxy = await Galaxy.findByPk(id)
      res.status(200).json(updatedGalaxy)
    } else {
      res.status(404).json({ error: 'Galaxy not found' })
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
    const deleted = await Galaxy.destroy({
      where: { id: id }
    })
    if (deleted) {
      res.status(204).end()
    } else {
      res.status(404).json({ error: 'Galaxy not found' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Export all controller actions
module.exports = { index, show, create, update, remove }