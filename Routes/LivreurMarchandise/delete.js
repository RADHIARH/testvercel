const controller = require("../../Controller/LivreurMarchandise");
const express = require("express");
const router = express.Router();
router.route("/:id").delete(controller.delete_livreur);
module.exports = router;
