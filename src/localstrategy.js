const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const bcrypt = require("bcrypt");

const local = new LocalStrategy(
	{ usernameField: "email" },
	async (email, password, done) => {
		const user = await User.findOne({ email });
		if (!user) {
			return done(null, false, { message: "Incorrect email" });
		} else if (!(await bcrypt.compare(password, user.password))) {
			return done(null, false, { message: "Incorrect password" });
		}
		return done(null, user);
	}
);

module.exports = local;
