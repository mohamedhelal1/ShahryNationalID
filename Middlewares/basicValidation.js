const { containsOnlyNumbers, noWhiteSpace } = require("../Helpers/NationalIDHelpers");

module.exports = async (req, res, next) => {
	req.params.ID = noWhiteSpace(req.params.ID)
    let ID = req.params.ID;

	if (!containsOnlyNumbers(ID)) {
		res.status(400);
		throw new Error("National ID should only contain numbers");
	}

	if (ID.length !== 14) {
		res.status(400);
		throw new Error("National ID should Contain 14 numbers");
	}

	if(ID.charAt(0) !== '2' && ID.charAt(0) !== '3'){
		res.status(400);
		throw new Error("National ID should start with a 2 or a 3");
	}
	if(ID.charAt(13) === '0'){
		res.status(400);
		throw new Error("Last digit should be from 1-9");
	}
	next();
};
