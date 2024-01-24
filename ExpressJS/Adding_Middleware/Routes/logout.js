const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const logoutController = require('../controllers/logout')

const router = express.Router();

router.get("/newLogout", logoutController.postLogout);


module.exports = router;
// onclick=""