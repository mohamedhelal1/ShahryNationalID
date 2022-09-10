const governorates = require("./governorates");

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
	getBirthDay: (str) => {
		return `${str.substring(5)}/${str.substring(3, 5)}/${
			str.charAt(0) == 2 ? "19" : "20"
		}${str.substring(1, 3)}`;
	},
	getGovernorate: (str) => {
		return governorates[str];
	},

	getGender: (str) => {
        console.log(str)
		return parseInt(str) % 2 === 0 ? "Female" : "Male";
	},
};
