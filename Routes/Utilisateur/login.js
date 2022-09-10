const controller = require("../../Controller/UserController");
const express = require("express");
const router = express.Router();
router.route("/").post(controller.login);
module.exports = router;
