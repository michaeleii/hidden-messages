const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
	{
		title: { type: String, required: true },
		timestamp: { type: Date, default: Date.now },
		content: { type: String, required: true },
		author: { type: Schema.Types.ObjectId, ref: "User" },
	},
	{ collection: "Post", timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
