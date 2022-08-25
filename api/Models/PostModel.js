const mongoose = require('mongoose');

const Posts = new mongoose.Schema(
	{
		desc: {
			type: String,
			required: true,
		},
		photo: {
			type: String,
			required: false,
		},
	},
	{ timestamps: true },
);
