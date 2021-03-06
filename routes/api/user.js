// We require the router
const router = require("express").Router();
// We require the object inside of index.js (we have to specifiy which controller we want to use by using the property name)
const controller = require("../../controller/UserController");

// Setup the routes for the  api's to hit
router.route("/").get(controller.findAll).post(controller.create);

router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.delete);

// We export the entire document
module.exports = router;
