const {
	getBirthDay,
	getGovernorate,
	getGender,
} = require("../Helpers/NationalIDHelpers");

module.exports = (req, res) => {
	let ID = req.params.ID;

	const birthday = getBirthDay(ID.substring(0, 7), res);
	const birthGovernorate = getGovernorate(ID.substring(7, 9), res);
	const gender = getGender(ID.charAt(12));
    
	res.status(200).json({
		birthday,
		birthGovernorate,
		gender,
	});
};
