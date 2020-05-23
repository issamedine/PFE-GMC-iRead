const mongoose = require("mongoose");

const eventBasketSchema = new mongoose.Schema({
  idBook: {
    type: String,
    // required: true,
  },
  titleBook: {
    type: String,
    // required: true,
  },
  qte: {
    type: Number,
    // required: true,
  },
  idUser: {
    type: String,
    // required: true,
  },
  emailUser: {
    type: String,
    // required: true,
  },
  priceBook: {
    type: Number,
  },
  total: {
    type: Number,
  },
  done: {
    type: String
  }
});

let EventModelBasket = mongoose.model("baskets", eventBasketSchema);

module.exports = EventModelBasket;
