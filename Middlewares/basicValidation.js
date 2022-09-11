const {
	containsOnlyNumbers,
	noWhiteSpace,
	hasCorrectLength,
	firstCharacterCorrect,
	lastCharacterCorrect,
} = require("../Helpers/NationalIDHelpers");

module.exports = (req, res, next) => {
	req.params.ID = noWhiteSpace(req.params.ID);
	let ID = req.params.ID;

	containsOnlyNumbers(ID, res);
	hasCorrectLength(ID, res);
	firstCharacterCorrect(ID, res);
	lastCharacterCorrect(ID, res);

	next();
};
