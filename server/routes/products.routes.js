const ProductController = require("../controllers/products.controller");
const Product = require ("../models/products.models");

module.exports = app => {
    app.get("/api/Products", ProductController.findAllProducts);
    app.get("/api/product/:_id", ProductController.findOneSingleProduct);
    app.put("/api/product/update/:_id", ProductController.updateExistingProduct);
    app.post("/api/product/new", ProductController.createNewProduct);
    app.delete("/api/product/delete/:_id", ProductController.deleteAnExistingProduct);
};