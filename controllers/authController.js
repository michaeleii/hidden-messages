const passport = require("passport");
const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.displayLoginForm = (req, res) => {
	res.render("login");
};

exports.loginUser = passport.authenticate("local", {
	successRedirect: "/",
	failureRedirect: "/auth/login",
	failureMessage: true,
});

exports.displayRegisterForm = (req, res) => {
	res.render("register");
};

exports.registerUser = async (req, res) => {
	try {
		const { first_name, last_name, email, password, password2 } = req.body;
		if (password !== password2) res.redirect("/auth/register");
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = new User({
			first_name,
			last_name,
			email,
			password: hashedPassword,
		});
		await user.save();
		res.redirect("/auth/login");
	} catch (error) {
		console.log(error);
	}
};

exports.logoutUser = (req, res) => {
	req.logout((err) => console.log(err));
	res.redirect("/");
};

exports.displayPasscodeForm = (req, res) => {
	res.render("secretPass");
};

exports.verifyPasscode = async (req, res) => {
	const { passcode } = req.body;
	if (passcode === process.env.PASSCODE) {
		try {
			await User.updateOne({ _id: res.locals.currentUser._id }, { vip: true });
			res.redirect("/");
		} catch (error) {
			console.log(error);
		}
	} else {
		res.redirect("/auth/passcode");
	}
};
