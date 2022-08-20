const app = require('./index');
require('dotenv').config();

// 	------------------- PORT CONNECTION
const port = process.env.Port || 2000;
app.listen(port, () => {
	console.log(`Node   ${port}`);
});
