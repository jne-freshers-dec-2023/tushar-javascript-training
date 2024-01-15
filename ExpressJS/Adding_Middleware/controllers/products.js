const path = require('path')
const rootDir = require("../util/path")

const Product = require('../models/product')

exports.getAddProduct = (req, res, next)=>{
    console.log('In the middleware')
    res.sendFile(path.join(__dirname, "../", 'views', 'add-product.html'))
}

exports.postAddProduct = (req, res, next)=>{
    const product = new Product(req.body)
    product.save();
    console.log(req.body)
    res.redirect('/')
}

exports.getProducts = (req, res, next)=>{
    const product = Product.fetchAll();
    console.log('In another middleware');
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
}