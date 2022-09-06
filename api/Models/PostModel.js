const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
	{
		post: {
			type: String,
			required: [true, 'Post must have a desc'],
		},
		photo: {
			type: String,
			required: false,
		},

		postedBy: {
			type: String,
			required: true,
			required: [true, 'Post must have a username '],
		},

		comments: {
			type: Array,
			required: false,
		},

		likes: {
			type: Array,
			required: false,
		},
	},
	{ timestamps: true },
);

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
