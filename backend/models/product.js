const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	name: {
		type: "string",
		required: true,
	},
	description: {
		type: "string",
		required: true,
	},
	price: {
		type: "number",
		required: true,
	},
	countInStock: {
		type: Number,
		required: true,
	},
	imageUrl: {
		type: "string",
		required: true,
	},
});

const product = mongoose.model("Product", productSchema);

module.exports = product;
