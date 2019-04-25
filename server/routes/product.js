//Product Model
const Product = require("../models/Product");

const express = require("express");
const product = express.Router();

product.post("/product", (req, res) => {
  const { price, name } = req.body;
  const newProduct = {
    price: price,
    name: name
  };

  Product.create(newProduct).then(product => {
    console.log(`${product} has been added`);
  });
});
product.get("/product", (req, res) => {
  Product.find().then(products => res.json(products));
});

module.exports = product;
