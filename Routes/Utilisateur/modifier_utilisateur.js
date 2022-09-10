const controller = require("../../Controller/UserController");
const express = require("express");
const router = express.Router();
router.route("/:id").put(controller.update_user);
module.exports = router;
