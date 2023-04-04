const express = require("express");
const session = require("express-session");
const passport = require("passport");
const logger = require("morgan");

module.exports = intializeExpressMiddlewares = (app) => {
	app.use(express.urlencoded({ extended: true }));
	app.use(express.static("public"));
	app.set("view engine", "ejs");
	app.set("views", "views");
	app.use(
		session({
			secret: "secret",
			resave: false,
			saveUninitialized: true,
		})
	);
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(logger("dev"));

	app.use(async (req, res, next) => {
		res.locals.currentUser = await req.user;
		next();
	});
};
