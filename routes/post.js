const express = require("express");
const post = express.Router();
const Post = require("../models/Post");
const {
	createPost,
	displayCreatePostForm,
} = require("../controllers/postController");
const { ensureAuthenticated } = require("../middlewares/auth.middleware");

post
	.route("/create")
	.all(ensureAuthenticated)
	.get(displayCreatePostForm)
	.post(createPost);

post.post("/delete/:id", ensureAuthenticated, async (req, res) => {
	try {
		await Post.deleteOne({ _id: req.params.id });
		res.redirect("/");
	} catch (error) {
		console.log(error);
	}
});

module.exports = post;
