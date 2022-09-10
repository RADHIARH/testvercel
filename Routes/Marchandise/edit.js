const controller = require("../../Controller/MarchandiseController");
const express = require("express");
const router = express.Router();
router.route("/:id").put(controller.update_marchandise);
module.exports = router;
