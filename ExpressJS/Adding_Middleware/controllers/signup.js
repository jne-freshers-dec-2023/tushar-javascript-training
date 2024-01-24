const bcrypt = require("bcryptjs");

const path = require("path");
const rootDir = require("../util/path");

// const SignUp = require("../models/signup");
const User = require("../models/user");

exports.getSignUpPage = (req, res, next) => {
  console.log("In the middleware");
  res.sendFile(path.join(__dirname, "../", "views", "signup.html"));
};

exports.postSignUp = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  User.findOne({ email: email })
    .then((userDoc) => {
      if (userDoc) {
        return res.redirect("/signup");
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
      console.log(err);
    });

  //   const signup = new SignUp({
  //     email: email,
  //     password: password,
  //     confirmPassword: confirmPassword,
  //   });

  //   signup
  //     .save()
  //     .then((result) => {
  //       console.log(result);
  //       console.log("User Signed Up!");
  //       res.redirect("/");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
};

// exports.getLogins = (req, res, next) =>{
//     Login.find()
//     .then((logins)=>{
//         console.log(logins)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

//   console.log("In another middleware");
//   res.sendFile(path.join(rootDir, "views", "shop.html"));
// }
