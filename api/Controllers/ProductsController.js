// ----Creating our third api

// Get all porducts
exports.getAllProducts = (req, res) => {
	console.log('TT');
	res.status(500).json({
		status: 'Erro r',
		message: ' Product Absent',
	});
};

exports.createProducts = (req, res) => {
	res.status(500).json({
		status: ' Error ',
		message: 'Product Not Created',
	});
};
