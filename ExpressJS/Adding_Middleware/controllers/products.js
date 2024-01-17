const path = require('path')
const rootDir = require("../util/path")

const Product = require('../models/product')

exports.getAddProduct = (req, res, next)=>{
    console.log('In the middleware')
    res.sendFile(path.join(__dirname, "../", 'views', 'add-product.html'))
}

exports.postAddProduct = (req, res, next)=>{
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;    
    const description = req.body.description;
    const product = new Product(title, imageUrl, price, description)
    product.save();
    res.redirect('/')
}

exports.getProducts = (req, res, next)=>{
    const product = Product.fetchAll();
    console.log('In another middleware');
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
}