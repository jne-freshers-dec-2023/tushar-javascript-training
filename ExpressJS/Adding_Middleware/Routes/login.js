const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const loginController = require("../controllers/login");

const router = express.Router();

router.get("/", loginController.getLoginPage);

router.post("/", loginController.postLogin);

router.get("/", loginController.getLogins);

module.exports = router;
