const controller = require("../../Controller/MarchandiseController");
const express = require("express");
const router = express.Router();
router.route("/id").put(controller.changer_etat_marchandise);
module.exports = router;
