const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");
 router.get("/messages", messageController.index);
 router.get("/messages/new", messageController.new);



module.exports = router;
