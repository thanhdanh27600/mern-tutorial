const express = require("express");
const router = express.Router();
const {
	registerUser,
	loginUser,
	getMe,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get(
	"/me",
	[
		(req, res, next) => {
			console.log("HELLO");
			next();
		},
		protect,
	],
	getMe
);

module.exports = router;
