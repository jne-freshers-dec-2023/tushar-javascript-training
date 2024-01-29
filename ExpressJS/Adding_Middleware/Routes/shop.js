const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const productsController = require("../controllers/products");
const isAuth = require("../middleware/isAuth");
const router = express.Router();

router.get("/shop", isAuth, productsController.getProducts);


router.get("/shopall", productsController.getAllProducts);

module.exports = router;
