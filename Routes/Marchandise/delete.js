const controller = require("../../Controller/MarchandiseController");
const express = require("express");
const router = express.Router();
router.route("/:id").delete(controller.delete_marchandise);
module.exports = router;
