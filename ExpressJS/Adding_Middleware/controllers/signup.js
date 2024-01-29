const bcrypt = require("bcryptjs");

const path = require("path");
const rootDir = require("../util/path");

const User = require("../models/user");
const { error } = require("console");

exports.getSignUpPage = (req, res, next) => {
  console.log("In the Signup Page");
  res.sendFile(path.join(__dirname, "../", "views", "signup.html"));
};

exports.postSignUp = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirm_password;

  if (password !== confirmPassword) {
    console.log("Passwords do not match");
    // throw new Error ('Passwords do not match')
    return res.redirect("/signup");
  }


  User.findOne({ email: email })
    .then((userDoc) => {
      if (userDoc) {
        console.log("User already exists please login");
        // throw new Error ("User already exists please login");
        return res.redirect("/");
      }

      return bcrypt
        .hash(password, 12)
        .then((hashedPassword) => {
          const user = new User({
            email: email,
            password: hashedPassword,
          });
          return user.save();
        })
        .then((result) => {
          res.redirect("/");
        });
    })
    .catch((err) => {
      console.error(err);
    });
};
