const controller = require("../../Controller/UserController");
const express = require("express");
const router = express.Router();
router.route("/:id").get(controller.getoneuser);
module.exports = router;
