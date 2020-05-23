const Books = require("../models/Event-model-books");

module.exports = booksController = {
  add: async (req, res) => {
    const { title, date, description, kind, img, price, qte, like } = req.body;
    try {
      let newBook = new Books({
        title,
        date,
        description,
        kind,
        img,
        price,
        qte,
        like,
        publish: Date.now(),
        authorAddedBook: req.user.id,
      });

      await newBook.save();

      res.send("Book added with success");
    } catch (err) {
      res.status(500).send("Book not added !!!");
    }
  },
  list: async (req, res) => {
    try {
      const books = await Books.find();
      res.send(books);
    } catch (error) {
      res.status(500).send("books not available !!!");
    }
  },
  deleteBook: async (req, res) => {
    console.log("req.params.id", req.params.id);
    try {
      const deleteBook = await Books.findOneAndDelete({ _id: req.params.id });
      const books = await Books.find();
      res.send(books);
    } catch (error) {
      res.status(500).send("books not available !!!");
    }
  },
  updateBook: async (req, res) => {
    try {
      const Book = await Books.update(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
      const newBook = await Books.find();
      res.send(newBook);
    } catch (error) {
      res.status(500).send("books not available !!!");
    }
  },
  updateBookLike: async (req, res) => {
    console.log("req.params.idBook", req.params.id);
    try {
      const result = await Books.findOne({ _id: req.params.id });

      if (result && result._id == req.params.id) {
        await Books.findOneAndUpdate(
          { _id: req.params.id },
          {
            $inc: { like: 1 },
          }
        );
        console.log("result", result);
        res.send("Article like added + 1");
      } 
    } catch (error) {
      res.status(500).send("books not available !!!");
    }
  },
};
