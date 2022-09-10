module.exports = (err, req, res, next) => {
	if (!res.statusCode) {
		res.status(500);
	}
	res.json({
		message: err.message,
	});
};
