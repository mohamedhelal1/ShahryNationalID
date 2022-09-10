const { containsOnlyNumbers, checkSumDigitIsValid, noWhiteSpace } = require("../Helpers/NationalIDHelpers");

module.exports = async (req, res, next) => {
	let ID = req.params.ID;

	ID = noWhiteSpace(ID);

	if (!containsOnlyNumbers(ID)) {
		res.status(400);
		throw new Error("National ID should only contain numbers");
	}

	if (ID.length !== 14) {
		res.status(400);
		throw new Error("National ID should Contain 14 numbers");
	}

	if (!checkSumDigitIsValid(ID)) {
		res.status(400);
		throw new Error("National ID is Invalid");
	}

	next();
};
