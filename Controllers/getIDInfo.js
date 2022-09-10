const { getBirthDay, getGovernorate, getGender } = require("../Helpers/NationalIDHelpers");


module.exports = async (req, res) => {
	let ID = req.params.ID;
	res.status(200).json({
		birthday: getBirthDay(ID.substring(0, 7)),
		governorate: getGovernorate(ID.substring(7,9)),
		gender: getGender(ID.charAt(12))
	});
};
