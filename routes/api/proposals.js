const router = require("express").Router();
const proposalController = require("../../controllers/proposalController");

// Matches with "/api/proposals"
router.route("/")
    .post(proposalController.create);

// Matches with "/api/proposals/:userId"
router.route("/:userId")
    .get(proposalController.findAllWithUserId)

// Matches with "/api/proposals/:id"
router
    .route("/:id")
    .get(proposalController.findById)
    .put(proposalController.update)
    .delete(proposalController.remove);

module.exports = router;