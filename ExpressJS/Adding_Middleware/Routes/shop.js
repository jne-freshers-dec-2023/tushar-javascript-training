const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const productsController = require("../controllers/products");
const loginController = require("../controllers/login")

const router = express.Router();

router.get("/shop", productsController.getProducts);


module.exports = router;
