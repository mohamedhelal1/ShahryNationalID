const governorates = require("./governorates");
const moment = require("moment");

module.exports = {
	containsOnlyNumbers: (str, res) => {
		if (!/^[0-9]+$/.test(str)) {
			res.status(400);
			throw new Error("National ID should only contain numbers");
		}
	},
	noWhiteSpace: (str) => {
		return str.replace(/\s/g, "");
	},
	hasCorrectLength: (str, res) => {
		if (str.length !== 14) {
			res.status(400);
			throw new Error("National ID should Contain 14 numbers");
		}
	},
	firstCharacterCorrect: (str, res) => {
		if (str.charAt(0) !== "2" && str.charAt(0) !== "3") {
			res.status(400);
			throw new Error("National ID should start with a 2 or a 3");
		}
	},
	lastCharacterCorrect: (str, res) => {
		if (str.charAt(str.length-1) === "0") {
			res.status(400);
			throw new Error("Last digit should be from 1-9");
		}
	},
	getBirthDay: (str, res) => {
		const date = `${str.substring(5)}/${str.substring(3, 5)}/${
			str.charAt(0) == 2 ? "19" : "20"
		}${str.substring(1, 3)}`;

		if (!moment(date, "DD/MM/YYYY", true).isValid()) {
			res.status(400);
			throw new Error("Birthday digits are invalid");
		}
		if (moment(date, "DD/MM/YYYY", true).isAfter(moment())) {
			res.status(400);
			throw new Error("Birthday date is in the future");
		}
		return date;
	},
	getGovernorate: (str, res) => {
		if (!governorates[str]) {
			res.status(400);
			throw new Error("Governorate digits are invalid");
		}
		return governorates[str];
	},

	getGender: (str) => {
		return parseInt(str) % 2 === 0 ? "Female" : "Male";
	},
};
