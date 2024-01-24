const http = require("http");
const path = require("path");
const env = require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const errorController = require("./controllers/error");
// const mongoConnect = require("./util/database").mongoConnect;

const app = express();
const store = new MongoDBStore({
  uri: process.env.MONGODB_URI,
  collection: "sessions",
});

const adminRoutes = require("./Routes/admin");
const shopRoutes = require("./Routes/shop");
const loginRoutes = require("./Routes/login");

const logoutRoutes = require("./Routes/logout");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.cookie("myCookie", "hello", {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
  });
  next();
});

app.use(
  session({
    secret: "my secrete",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(loginRoutes);
app.use(logoutRoutes);

app.use(errorController.get404);

const PORT = 3000;

// sequelize
//   .sync({ force: true })
//   .then((result) => {
//     // console.log(result);
//     app.listen(PORT, () => {
//       console.log(`Server is listening on http://localhost:${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// mongoConnect(() => {
//   app.listen(`${PORT}`);
// });

mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => {
    // console.log(result);
    console.log("Connected!");
    app.listen(`${PORT}`);
  })
  .catch((err) => {
    console.log(err);
  });
