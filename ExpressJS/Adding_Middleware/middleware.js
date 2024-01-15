const http = require('http');
const path = require('path')

const express = require('express');
const bodyParser = require('body-parser')

const errorController = require('./controllers/error')

const app = express();

const adminRoutes = require('./Routes/admin');
const shopRoutes = require('./Routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminRoutes);
app.use(shopRoutes)

app.use(errorController.get404)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
