const index = require("../routes/index");
const auth = require("../routes/auth");
const post = require("../routes/post");

module.exports = intializeRouters = (app) => {
	app.use("/", index);
	app.use("/auth", auth);
	app.use("/post", post);
};
