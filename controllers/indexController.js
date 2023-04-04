const Post = require("../models/Post");
const postViewmodel = require("../viewmodels/post.viewmodel");

exports.displayHomepage = async (req, res) => {
	if (res.locals.currentUser) {
		const posts = await Post.find().populate("author");
		res.locals.posts = posts.map((post) => postViewmodel(post));
	}
	res.render("index");
};
