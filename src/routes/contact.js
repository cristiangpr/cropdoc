const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
 router.get("/contact", contactController.form);



module.exports = router;