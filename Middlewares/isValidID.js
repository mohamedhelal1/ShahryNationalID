const containsOnlyNumbers = (str) => {
	return /^[0-9]+$/.test(str);
};

const noWhiteSpace = (str) => {
	return str.replace(/\s/g, "");
};
const checkSumDigitIsValid = (str) => {
	const checkSumDigit = str.substring(13);
	let array = str.substring(0, 13).split("").reverse();
	const sum = array.reduce(
		(total, current, index) =>
			(total += index % 2 === 0 ? parseInt(current) : parseInt(current) * 3),
		0
	);
	return (10 - (sum % 10)) % 10 === parseInt(checkSumDigit);
};
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
