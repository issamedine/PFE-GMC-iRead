const express = require("express");
const router = express.Router();

const booksController = require("../controllers/booksController");
const isAuth = require("../middlewares/passport-setup");

//@route POST /register
//@desc  Register user & login
//@access Public

router.post("/add", isAuth(), booksController.add);

router.get("/list", booksController.list);

//@route DELETE /delete/book/:id
//@desc delete book /author
//@access Private
router.delete("/delete_book/:id", booksController.deleteBook);

router.put("/update_book/:id", booksController.updateBook);

router.put("/book-like-update/:id", booksController.updateBookLike);

module.exports = router;
