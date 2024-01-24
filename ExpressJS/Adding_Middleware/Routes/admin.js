const path = require('path')

const express = require('express')

const rootDir = require("../util/path");
const productsController = require('../controllers/products');
const isAuth = require('../middleware/isAuth')

const router = express.Router();

router.get('/add-product',isAuth, productsController.getAddProduct);

router.post('/add-product',isAuth, productsController.postAddProduct);

module.exports = router;