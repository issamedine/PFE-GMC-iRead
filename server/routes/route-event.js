const express = require("express");
const router = express.Router();

const personController = require("../controllers/personController");
const basketController = require("../controllers/basketController");
const { registerRules, validator } = require("../middlewares/validator");
const isAuth = require("../middlewares/passport-setup");

//@route POST /register
//@desc  Register user & login
//@access Public
router.post("/signup", personController.signup);

//@route POST /login
//@desc  Login user / auth / admin
//@access Public
router.post("/login", personController.login);

//@route GET /books
//@desc demande books
//@access Public
// router.get("/books", personController.books);

//@route GET loading
router.get("/current", isAuth(), personController.authUser);

//@route GET /admin/dashboard
//@desc demande dashboard /admin
//@access Private
router.get("/admin/dashboard", isAuth(), personController.adminDashboard);

//@route GET /auth/dashboard
//@desc demande dashboard /auth
//@access Private
router.get("/author/dashboard", isAuth(), personController.authorDashboard);

//@route GET /auth/profile
//@desc demande profile /auth
//@access Private
router.get("/author/profile", isAuth(), personController.authorProfile);

//@route GET /api/contact
//@desc demande profile /auth
//@access Private
router.get("/api/contact/", personController.getAllContact);

//@route PUT /profileAuthor/update
//@desc update profile /auth
//@access Private
router.put("/profileAuthor/update/:id", personController.updateProfileAuthor);

//@route GET /user/profile
//@desc demande profile /user
//@access Private
router.get("/user/profile", isAuth(), personController.userProfile);

//@route POST /basket
//@desc post basket
//@access Private
router.post("/basket", basketController.add);

//@route GET /basket
//@desc get basket
//@access Private
router.get("/get-basket/:id", basketController.list);

//@route DELETE /basket
//@desc get basket
//@access Private
router.delete("/delete-basket/:id", basketController.delete);

//@route UPDATE /basket
//@desc put basket
//@access Private
// router.put("/update-basket", basketController.updateBasket);

router.delete("/delete-all-basket/:id", basketController.deleteAll);

module.exports = router;
