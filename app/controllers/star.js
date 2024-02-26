// Import the Star model
const { Star } = require('../models')

// Show all resources
const index = async (req, res) => {
  // Respond with an array and 2xx status code
  try {
    const stars = await Star.findAll()
    res.status(200).json(stars)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Show resource
const show = async (req, res) => {
  // Respond with a single object and 2xx code
  const { id } = req.params
  try {
    const star = await Star.findByPk(id)
    if (!star) {
      res.status(404).json({ error: 'Star not found' })
    } else {
      res.status(200).json(star)
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Create a new resource
const create = async (req, res) => {
  // Issue a redirect with a success 2xx code
  try {
    const newStar = await Star.create(req.body)
    res.status(201).json(newStar)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Update an existing resource
const update = async (req, res) => {
  // Respond with a single resource and 2xx code
  const { id } = req.params
  try {
    const [updated] = await Star.update(req.body, {
      where: { id: id }
    })
    if (updated) {
      const updatedStar = await Star.findByPk(id)
      res.status(200).json(updatedStar)
    } else {
      res.status(404).json({ error: 'Star not found' })
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
    const deleted = await Star.destroy({
      where: { id: id }
    })
    if (deleted) {
      res.status(204).end()
    } else {
      res.status(404).json({ error: 'Star not found' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Export all controller actions
module.exports = { index, show, create, update, remove }