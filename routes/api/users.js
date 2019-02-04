const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users/profile/:id"
router.route("/profile")
    .put(userController.updateUserProfile)

module.exports = router;