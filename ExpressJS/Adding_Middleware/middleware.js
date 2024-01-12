const http = require('http');

const express = require('express');
const bodyParser = require('body-parser')


const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/add-product', (req, res, next)=>{
    console.log('In the middleware')
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
});

app.post('/product', (req, res, next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/', (req, res, next)=>{
    console.log('In another middleware');
    res.send('<h1>Hello From ExpressJS</h1>')
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
