const path = require("path");
const rootDir = require("../util/path");

const session = require("express-session");

const Login = require("../models/login");
const db = require("../util/database");

exports.getLoginPage = (req, res, next) => {
  console.log("In the middleware");
  res.sendFile(path.join(__dirname, "../", "views", "login.html"));
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  const email = req.body.email;
  const password = req.body.password;

  const login = new Login({
    email: email,
    password: password,
  });

  login
    .save()
    .then((result) => {
      console.log(result);
      console.log("User Logged In!");
      // res.sendFile(path.join(rootDir, "views", "add-prduct.html"));      
      // res.sendFile(path.join(rootDir, "views", "shop.html"));
      res.redirect("/shop"); 
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getLogins = (req, res, next) =>{
    Login.find()
    .then((logins)=>{
        console.log(logins)
    })
    .catch((err)=>{
        console.log(err)
    })

  console.log("In another middleware");
  res.sendFile(path.join(rootDir, "views", "shop.html"));
}
