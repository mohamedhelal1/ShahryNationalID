const express = require("express");
const morgan = require('morgan')
const dotenv = require("dotenv").config();
const router = require('./Routes')

const port = process.env.PORT;
const app = express();

app.use(morgan('combined'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router)

app.use((_req, res) => {
	res.status(404).json({
		err: null,
		msg: "The function does not exist",
		data: null,
	});
});

app.listen(port, () => {
	console.log(`start app on port ${port}`);
});
