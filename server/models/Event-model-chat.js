const mongoose = require("mongoose");

const eventChatSchema = new mongoose.Schema(
  {
    message: {
      type: String,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "persons",
    },
    type: {
      type: String,
    },
  },
  { timestamps: true }
);

let EventModelChat = mongoose.model("chats", eventChatSchema);

module.exports = EventModelChat;
