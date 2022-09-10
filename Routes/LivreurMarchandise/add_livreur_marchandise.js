const controller = require("../../Controller/LivreurMarchandise");
const express = require("express");
const router = express.Router();
router.route("/").post(controller.create_livreur_marchandise);
module.exports = router;
