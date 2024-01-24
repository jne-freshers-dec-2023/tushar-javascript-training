const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const logoutController = require('../controllers/logout')
const isAuth = require('../middleware/isAuth')

const router = express.Router();

router.get("/newLogout",isAuth, logoutController.postLogout);


module.exports = router;