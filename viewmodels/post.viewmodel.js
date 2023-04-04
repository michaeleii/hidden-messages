function postViewmodel(post) {
	this.id = post.id;
	this.title = post.title;
	this.content = post.content;
	this.author = post.author;
	this.createdAt = post.timestamp.toLocaleString("en-US", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	});
	return { id, title, content, author, createdAt };
}

module.exports = postViewmodel;
