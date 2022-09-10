const controller = require("../../Controller/UserController");
const express = require("express");
const router = express.Router();
router.route("/").get(controller.getUnvalidate_accounts);
module.exports = router;
