const express = require("express");
const router = express.Router();

const controller = require("../controllers/phoneControllers");

router.get("/phones", controller.getPhones);
router.post("/phones", controller.addPhone);
router.delete("/phones/:id", controller.deletePhone);

module.exports = router;
