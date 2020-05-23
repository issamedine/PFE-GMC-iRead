const Basket = require("../models/Event-model-basket");
const nodemailer = require("nodemailer");


module.exports = basketController = {
  add: async (req, res) => {
    const {
      idBook,
      titleBook,
      qte,
      idUser,
      emailUser,
      priceBook,
      total,
      done,
    } = req.body;
    try {
      let newBasket = new Basket({
        idBook,
        titleBook,
        qte,
        idUser,
        emailUser,
        priceBook,
        total,
        done,
      });

      console.log("req.body.qte", req.body.qte);
      const result = await Basket.findOne({ idBook: req.body.idBook });
      if (result && result.idBook == req.body.idBook) {
        await Basket.findOneAndUpdate(
          { idBook: req.body.idBook },
          {
            $inc: { qte: req.body.qte },
            $set: { total: req.body.total * (result.qte + 1) },
          }
        );
        console.log("result", result);
        res.send("Article added + 1");
      } else {
        await newBasket.save();
        res.send("Article added to basket");
      }
    } catch (err) {
      res.status(500).send(err);
      console.log(err);
    }
  },
  list: async (req, res) => {
    try {
      const bookBasket = await Basket.find({
        idUser: req.params.id,
        done: "false",
      });

      res.send(bookBasket);
    } catch (error) {
      res.status(500).send("basket not available !!!");
    }
  },
  delete: async (req, res) => {
    try {
      await Basket.findOneAndDelete({ _id: req.params.id });
      const findNewBasket = await Basket.find();
      res.send(findNewBasket);
    } catch (error) {
      res.status(500).send("basket not available !!!");
    }
  },
  deleteAll: async (req, res) => {
    try {
      // START SEND MAIL


      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "ireadproject47@gmail.com",
          pass: "iRead789",
        },
      });

      let mailOptions = {
        from: "ireadproject47@gmail.com",
        subject: "Sending Email using Node.js",
        text: "That was easy!",
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log("Error: ", error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      // END SEND MAIL

      const result = await Basket.deleteMany({ idUser: req.params.id });
      const newBasket = await Basket.find();
      res.send(newBasket);
    } catch (error) {
      res.status(500).send("basket not available !!!");
      console.log("error", error);
    }
  },
  // updateBasket: async (req, res) => {
  //   try {
  //     console.log("req.body update", req.body);
  //     const baskets = req.body;
  //     baskets.forEach(async (basket) => {
  //       basket.done = "true";
  //       var id  = basket._id
  //       var basketUpdate = {
  //         $set: basket,
  //       };
  //       var result = await Basket.findByIdAndUpdate(id, basketUpdate).exec();
  //       console.log(basketUpdate);
  //     });

  //     const newRes = await Basket.findOne({ done: "false" });
  //     res.send(newRes);

  //   } catch (error) {
  //     res.status(500).send("basket not available !!!");
  //     console.log("error", error);
  //   }
  // },
};
