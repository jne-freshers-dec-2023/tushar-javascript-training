const bcrypt = require("bcryptjs");

const path = require("path");
const rootDir = require("../util/path");

const Login = require("../models/login");
const User = require("../models/user");

exports.getLoginPage = (req, res, next) => {
  console.log("In the middleware");
  res.sendFile(path.join(__dirname, "../", "views", "login.html"));
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.redirect("/");
    }
    
    bcrypt
      .compare(password, user.password)
      .then(doMatch => {
        if(doMatch){
          req.session.isLoggedIn = true;
          req.session.user = JSON.stringify(user);
          return req.session.save(err =>{
            console.log(err);
            console.log("User Logged In Successfully!");
            return res.redirect('/shop')
          })
          return res.redirect('/shop')
        }
        res.redirect('/')
      })
      .catch((err) => {
        console.log(err);
        res.redirect("/");
      });
  });

  // const login = new Login({
  //   email: email,
  //   password: password,
  // });

  // login
  //   .save()
  //   .then((result) => {
  //     console.log(result);
      
  //     // res.sendFile(path.join(rootDir, "views", "add-prduct.html"));
  //     // res.sendFile(path.join(rootDir, "views", "shop.html"));
  //     res.redirect("/shop");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
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
