const path = require("path");
const router = require("express").Router();
const productRoutes = require("./products");
const proposalRoutes = require("./proposals");

// Product routes
router.use("/products", productRoutes);

// Proposal routes
router.use("/proposals", proposalRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;