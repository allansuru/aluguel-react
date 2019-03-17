const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev')

mongoose
	.connect(config.DB_URI, { useNewUrlParser: true })
	.then(() => console.log('Connected'));

const app = express();
const PORT = process.env.PORT || 3001

app.get('/rentals', (req, res) => {
	res.json({
		'sucess': true
	});
});


app.listen(PORT, () => console.log(`No ar. ${PORT}`));