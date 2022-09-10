const controller = require("../../Controller/Livreur_Vehicule");
const express = require("express");
const router = express.Router();
router.route("/").post(controller.addliv_vehicule);
module.exports = router;
