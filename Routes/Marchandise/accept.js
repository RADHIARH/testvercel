const controller = require("../../Controller/MarchandiseController");
const express = require("express");
const router = express.Router();
router.route("/").post(controller.accept);
module.exports = router;
