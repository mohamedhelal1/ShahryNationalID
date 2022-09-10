const { getBirthDay, getGovernorate, getGender, isBirthDayValid } = require("../Helpers/NationalIDHelpers");


module.exports = async (req, res) => {
	let ID = req.params.ID;
    const birthday = getBirthDay(ID.substring(0, 7));
    if(!isBirthDayValid(birthday)){
        res.status(400);
		throw new Error("Birthday digits are invalid");
    }
    const birthGovernorate = getGovernorate(ID.substring(7,9))
    if(!birthGovernorate){
        res.status(400);
        throw new Error("Governorate digits are invalid");
    }
    const gender = getGender(ID.charAt(12));
	res.status(200).json({
		birthday,
		birthGovernorate,
		gender
	});
};
