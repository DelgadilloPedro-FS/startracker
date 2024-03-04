// Load in Express framework
const express = require(`express`);

// Load in our controller/action instances
const planetCtlr = require(`../controllers/planet.js`);

// Create a new Router instance and call it "router"
const router = new express.Router();

// RESTful resource mappings
router.get(`/`, planetCtlr.index);
router.post(`/`, planetCtlr.create);
router.get(`/create`, planetCtlr.form);
router.get(`/:id`, planetCtlr.show);
router.put(`/:id/update`, planetCtlr.update);
router.post(`/:id/delete`, planetCtlr.remove);

// export "router"
module.exports = router;
