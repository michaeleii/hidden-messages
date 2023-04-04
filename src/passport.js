const passport = require("passport");
const User = require("../models/User");
const local = require("./localstrategy");

module.exports = intializePassport = () => {
	// Serialize User
	passport.serializeUser((user, done) => {
		done(null, user._id);
	});

	// Deserialize User
	passport.deserializeUser((id, done) => {
		const user = User.findById(id);
		if (user) {
			done(null, user);
		} else {
			done(null, false, { message: "User not found" });
		}
	});

	passport.use(local);
};
