const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const signupController = require("../controllers/signup");

const router = express.Router();

router.get("/signup", signupController.getSignUpPage);

router.post("/signup", signupController.postSignUp);

module.exports = router;
