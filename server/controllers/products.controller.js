const Product = require("../models/products.models");

module.exports.findAllProducts = (req, res) => {
    Product.find()
    .then(allProducts => res.json({ results: allProducts }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleProduct = (req, res) => {
	Product.findOne({ _id: req.params._id })
		.then(oneSingleProduct => res.json({ results: oneSingleProduct }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
    .then(newlyCreatedProduct => res.json({ results: newlyCreatedProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params._id }, req.body, {runValidators: true})
    .then(updatedProduct => res.json({ result: updatedProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params._id })
    .then(results => res.json({ results: results }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

