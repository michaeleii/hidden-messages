const express = require("express");
const auth = express.Router();

const {
	logoutUser,
	registerUser,
	displayRegisterForm,
	loginUser,
	displayLoginForm,
	displayPasscodeForm,
	verifyPasscode,
} = require("../controllers/authController");

const {
	ensureAuthenticated,
	forwardAuthenticated,
} = require("../middlewares/auth.middleware");

auth
	.route("/login")
	.all(forwardAuthenticated)
	.get(displayLoginForm)
	.post(loginUser);

auth
	.route("/register")
	.all(forwardAuthenticated)
	.get(displayRegisterForm)
	.post(registerUser);

auth
	.route("/passcode")
	.all(ensureAuthenticated)
	.get(displayPasscodeForm)
	.post(verifyPasscode);

auth.get("/logout", logoutUser);

module.exports = auth;
