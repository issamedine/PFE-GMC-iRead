const mongoose = require("mongoose");

const eventBookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  kind: {
    type: String,
    // required: true,
  },
  img: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
  },
  qte: {
    type: Number,
  },
  like: {
    type: Number
  },
  publish: {
    type: Date,
    default: Date.now(),
  },
  authorAddedBook: { type: mongoose.Schema.Types.ObjectId, ref: "persons" },
});

let EventModelBook = mongoose.model("books", eventBookSchema);

module.exports = EventModelBook;
