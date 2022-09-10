const controller = require("../../Controller/UserController");
const express = require("express");
const router = express.Router();
router.route("/:id").delete(controller.delete_user);
module.exports = router;
