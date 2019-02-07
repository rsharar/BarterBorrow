const router = require("express").Router();
const productController = require("../../controllers/productController");

// Matches with "/api/products"
router.route("/")
    .get(productController.findAll)
    .post(productController.create);

// Matches with "/api/products/:id"
router.route("/:id")
    .get(productController.findById)
    .put(productController.update)
    .delete(productController.remove);

// Matches with "/api/products/categories/:category"
router.route("/categories/:category")
    .get(productController.findByCategory);

// Matches with "/api/products/titles/:searchQuery"
router.route("/titles/:searchQuery")
    .get(productController.findByTitle);

// Matches with "/api/products/users/:owneruserid"
router.route("/users/:owneruserid")
    .get(productController.findByUserId);

module.exports = router;