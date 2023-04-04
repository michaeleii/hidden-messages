const Post = require("../models/Post");

exports.displayCreatePostForm = (req, res) => {
	res.render("createPost");
};

exports.createPost = async (req, res) => {
	try {
		const { title, content } = req.body;
		const user = res.locals.currentUser;
		const post = new Post({
			title,
			content,
			author: user._id,
		});
		await post.save();
		res.redirect("/");
	} catch (error) {
		console.log(error);
	}
};
