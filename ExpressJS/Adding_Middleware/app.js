const http = require("http");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const mongoConnect = require("./util/database").mongoConnect;

const app = express();

const adminRoutes = require("./Routes/admin");
// const shopRoutes = require("./Routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  next();
});

app.use("/admin", adminRoutes);
// app.use(shopRoutes);

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

mongoConnect(() => {
  app.listen(`${PORT}`);
});
