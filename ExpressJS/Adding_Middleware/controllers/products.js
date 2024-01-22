const path = require("path");
const rootDir = require("../util/path");

const Product = require("../models/product");
const db = require("../util/database");

exports.getAddProduct = (req, res, next) => {
  console.log("In the middleware");
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;
  const product = new Product(title, price, description, imageUrl);
  product
    .save()
    .then((result) => {
      // console.log(result);
      console.log("Created Product!");
      res.redirect("/admin/add-product");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      console.log(products);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log("In another middleware");
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};
