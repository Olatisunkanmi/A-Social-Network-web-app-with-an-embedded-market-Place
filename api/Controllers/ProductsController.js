const Product = require('../Models/ProductModel');

// Get all porducts
exports.getAllProducts = async (req, res) => {
	try {
		const Products = await Product.find();
		res.status(200).json({
			status: 'Success',
			data: {
				products: Products,
			},
		});
	} catch (error) {
		res.status(404).json({
			status: 'Fail',
			message: error,
		});
	}
};

exports.createProducts = async (req, res) => {
	try {
		const NewProduct = await Product.create(req.body);
		res.status(200).json({
			status: 'Success',
			message: 'Product Created',
			data: {
				Product: NewProduct,
			},
		});
	} catch (error) {
		res.status(404).json({
			status: 'Fail',
			message: error,
		});
	}
};
