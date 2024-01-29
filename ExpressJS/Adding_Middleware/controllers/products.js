const path = require("path");
const rootDir = require("../util/path");

const Product = require("../models/product");
const db = require("../util/database");

const ITEMS_PER_PAGE = 2;

exports.getAddProduct = (req, res, next) => {
  console.log("In the add product page");
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;
  const product = new Product({
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
  });

  product
    .save()
    .then((result) => {
      console.log(result);
      console.log("Created Product!");
      res.redirect("/admin/add-product");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProducts = async (req, res, next) => {
  const page = req.query.page;
  let totalItems;

  try {
    const posts = await Product.find()
      .count()
      .then((numProducts) => {
        totalItems = numProducts;
        return Product.find()
          .skip((page - 1) * ITEMS_PER_PAGE)
          .limit(ITEMS_PER_PAGE);
      })
      .then((products) => {
        console.log(products);
        return
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }

  console.log("Pagination Worked Properly");
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};


exports.getAllProducts = async (req, res, next) => {
  const page = req.query.page;
  const limit = req.query.limit;

  let totalItems;

  try {
    const posts = await Product.find()
      .count()
      .then((numProducts) => {
        totalItems = numProducts;
        return Product.find()
          .skip((page - 1) * limit)
          .limit(limit);
      })
      .then((products) => {
        console.log(products);
        return res.json(products)
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};
