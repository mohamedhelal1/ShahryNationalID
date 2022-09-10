module.exports = {
	containsOnlyNumbers: (str) => {
		return /^[0-9]+$/.test(str);
	},

	noWhiteSpace: (str) => {
		return str.replace(/\s/g, "");
	},
	checkSumDigitIsValid: (str) => {
		const checkSumDigit = str.substring(13);
		let array = str.substring(0, 13).split("").reverse();
		const sum = array.reduce(
			(total, current, index) =>
				(total += index % 2 === 0 ? parseInt(current) : parseInt(current) * 3),
			0
		);
		return (10 - (sum % 10)) % 10 === parseInt(checkSumDigit);
	},
};
