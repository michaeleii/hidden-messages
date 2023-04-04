const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		first_name: { type: String, required: true },
		last_name: { type: String, required: true },
		email: { type: String, required: true },
		password: { type: String, required: true },
		vip: { type: Boolean, default: false },
		admin: { type: Boolean, default: false },
		posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
	},
	{ collection: "User", timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
