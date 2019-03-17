const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./models/fake-db');

const rentalRoutes = require('./routers/rentals');

mongoose
	.connect(config.DB_URI, { useNewUrlParser: true })
	.then(() => {
		console.log('Connected');
		const fakeDb = new FakeDb();
		fakeDb.seedDb();
	});

const app = express();
app.use('/api/v1/rentals', rentalRoutes);


const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`No ar. ${PORT}`));