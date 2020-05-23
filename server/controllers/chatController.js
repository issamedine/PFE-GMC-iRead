const Chat = require("../models/Event-model-chat");

module.exports = booksController = {
  getChat: async (req, res) => {
    try {
      const result = await Chat.find().populate("sender")
      res.send(result)
    } catch (err) {
      res.status(500).send("Book not added !!!");
    }
  },
};
