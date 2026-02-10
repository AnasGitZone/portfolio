const express = require("express");
const router = express.Router();
const { sendMessage } = require("../controllers/contactController");

router.post("/add", sendMessage);

module.exports = router;