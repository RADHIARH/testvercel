const controller = require("../../Controller/UserController");
const express = require("express");
const router = express.Router();
router.route("/").get(controller.getlistClient);
module.exports = router;
