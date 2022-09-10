const controller = require("../../Controller/UserController");
const express = require("express");
const router = express.Router();
router.route("/:id").put(controller.validate_account);
module.exports = router;
