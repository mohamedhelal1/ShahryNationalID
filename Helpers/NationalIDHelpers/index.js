const governorates = require("./governorates");
const moment = require('moment');

module.exports = {
	containsOnlyNumbers: (str) => {
		return /^[0-9]+$/.test(str);
	},

	noWhiteSpace: (str) => {
		return str.replace(/\s/g, "");
	},
	getBirthDay: (str) => {
		return `${str.substring(5)}/${str.substring(3, 5)}/${
			str.charAt(0) == 2 ? "19" : "20"
		}${str.substring(1, 3)}`;
	},
    isBirthDayValid: (date) =>{
        return moment(date, "DD/MM/YYYY", true).isValid() && moment(date, "DD/MM/YYYY", true).isBefore(moment());
    },
	getGovernorate: (str) => {
		return governorates[str];
	},

	getGender: (str) => {
		return parseInt(str) % 2 === 0 ? "Female" : "Male";
	},
};
