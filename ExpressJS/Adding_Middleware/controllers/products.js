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
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, price, description);
  product
    .save()
    .then(()=>{
        res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([result]) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("In another middleware");
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};
