const bcrypt = require("bcryptjs");

const path = require("path");
const rootDir = require("../util/path");

const Login = require("../models/login");
const User = require("../models/user");

exports.getLoginPage = (req, res, next) => {
  console.log("In the Login Page");
  res.sendFile(path.join(__dirname, "../", "views", "login.html"));
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        console.log("Invalid email or password");
        // throw new Error ("Invalid email or password");
        return res.redirect("/");
      }

      bcrypt
        .compare(password, user.password)
        .then((doMatch) => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = JSON.stringify(user);
            return req.session.save((err) => {
              console.log(err);
              console.log("User Logged In Successfully!");
              return res.redirect("/shop");
            });
          } else {
            console.log("Invalid email or password.");
            // throw new Error ("Invalid email or password");
            return res.redirect("/");
          }
        })
        .catch((err) => {
          console.log("Invalid email or password.");
          console.log(err);
          res.redirect("/");
        });
    })
    .catch((err) => {
      console.log("Invalid email or password");
      // throw new Error(err)
    });
};

exports.getLogins = (req, res, next) => {
  Login.find()
    .then((logins) => {
      console.log(logins);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log("In another middleware");
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};
