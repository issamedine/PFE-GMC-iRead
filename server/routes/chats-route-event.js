const express = require("express");
const router = express.Router();

const chatController = require("../controllers/chatController");

//@route POST /register
//@desc  Register user & login
//@access Public
router.get("/get-chat", chatController.getChat);



module.exports = router;
