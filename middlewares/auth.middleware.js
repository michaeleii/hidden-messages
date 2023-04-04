exports.ensureAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect("/auth/login");
};

exports.forwardAuthenticated = (req, res, next) => {
	if (!req.isAuthenticated()) {
		return next();
	}
	res.redirect("/posts");
};
