import axios from "axios";

export default {
    // Gets all products
    getAllProducts: function () {
        return axios.get("/api/products");
    },
    // Gets the product with the given id
    getOneProduct: function (id) {
        let productId = id.productId
        return axios.get("/api/products/" + productId);
    },
    // Gets all products associated with a user
    getProductsByUserId: function (userId) {
        let owneruserid = userId.owneruserid
        console.log(owneruserid)
        return axios.get("/api/products/users/" + owneruserid)
    },
    // Posts a product to the database
    postProduct: function (productData) {
        return axios.post("/api/products", productData);
    },
    // Gets products by category name
    getProductsByCategory: function (categoryObj) {
        let category = categoryObj.category;
        return axios.get("/api/products/categories/" + category);
    },
    // Gets products by searching for title
    getProductsBySearch: function (searchObj) {
        let searchQuery = searchObj.searchQuery;
        return axios.get("/api/products/titles/" + searchQuery);
    },
    getProductsByOwner: function (ownerId) {
        return axios.get("/api/products/owner/" + ownerId);
    },
    editProduct: function (id, productData) {
        return axios.put("/api/products/" + id, productData);
    },
    // Deletes the product with the given id
    deleteProduct: function (id) {
        return axios.delete("/api/products/" + id);
    },

    // ------------------------------

    // Gets all proposals
    getAllProposalsWithUser: function () {
        return axios.get("/api/proposals");
    },
    // Gets the proposal with the given id
    getOneProposal: function (id) {
        return axios.get("/api/proposals/" + id);
    },
    // Posts a proposal to the database
    postProposal: function (proposalData) {
        return axios.post("/api/proposals", proposalData);
    },
    editProposal: function (id, proposalData) {
        return axios.put("/api/proposals/" + id, proposalData);
    },
    // Deletes the proposal with the given id
    deleteProposal: function (id) {
        return axios.delete("/api/proposals/" + id);
    },

    // ------------------------------

    // Get user by id
    getUserById: function(id) {
        return axios.get()
    }
};
