import axios from "axios";

export default {
    // Gets all products
    getAllProducts: function () {
        return axios.get("/api/products");
    },
    // Gets the product with the given id
    getOneProduct: function (id) {
        return axios.get("/api/products/" + id)
    },
    // Posts a product to the database
    postProduct: function (productData) {
        return axios.post("/api/products", productData);
    },
    // Gets products by category name
    getProductsByCategory: function(category) {
        return axios.get("/api/products/", + category);
    },
    editProduct: function (id) {
    },
    // Deletes the product with the given id
    deleteProduct: function (id) {
        return axios.delete("/api/products/" + id);
    }
};
