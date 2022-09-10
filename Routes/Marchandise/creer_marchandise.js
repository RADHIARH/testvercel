const controller = require("../../Controller/MarchandiseController");
const express = require("express");
const router = express.Router();
router.route("/").post(controller.creer_marchandise);
module.exports = router;
