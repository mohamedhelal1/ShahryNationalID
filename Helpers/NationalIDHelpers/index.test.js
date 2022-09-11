const helpers = require("./index");

const httpMocks = require("node-mocks-http");

describe("basicValidation function", () => {
	let res = httpMocks.createResponse();
	//containsOnlyNumbers
	it("throws an error when a string does not only contain numbers in containsOnlyNumbers", () => {
		const testContainsOnlyNumbers = () =>
			helpers.containsOnlyNumbers("jk312l", res);
		expect(testContainsOnlyNumbers).toThrowError(
			"National ID should only contain numbers"
		);
	});
	it("does not throw an error when a string only contain numbers in containsOnlyNumbers", () => {
		const testContainsOnlyNumbers = () =>
			helpers.containsOnlyNumbers("1234321", res);
		expect(testContainsOnlyNumbers).not.toThrowError(Error);
	});
	//noWhiteSpace
	it("removes spaces from a string in noWhiteSpace", () => {
		const result = helpers.noWhiteSpace("12 3 43 21");
		expect(result).toEqual("1234321");
	});
	//hasCorrectLength
	it("throws an error when a string length does not equal 14 in hasCorrectLength", () => {
		let testHasCorrectLength = () =>
			helpers.hasCorrectLength("1234567891234", res);
		expect(testHasCorrectLength).toThrowError(
			"National ID should Contain 14 numbers"
		);
		testHasCorrectLength = () =>
			helpers.hasCorrectLength("123456789123456", res);
		expect(testHasCorrectLength).toThrowError(
			"National ID should Contain 14 numbers"
		);
	});
	it("does not throw an error when a string length is 14 in hasCorrectLength", () => {
		const testHasCorrectLength = () =>
			helpers.hasCorrectLength("12345678912345", res);
		expect(testHasCorrectLength).not.toThrowError(Error);
	});
	//firstCharacterCorrect
	it("throws an error when a string does not start with 2 or 3 in firstCharacterCorrect", () => {
		let testFirstCharacterCorrect = () =>
			helpers.firstCharacterCorrect("1234567891234", res);
		expect(testFirstCharacterCorrect).toThrowError(
			"National ID should start with a 2 or a 3"
		);
		testFirstCharacterCorrect = () =>
			helpers.firstCharacterCorrect("423456789123456", res);
		expect(testFirstCharacterCorrect).toThrowError(
			"National ID should start with a 2 or a 3"
		);
	});
	it("does not throw an error when a string starts with 2 or 3 in firstCharacterCorrect", () => {
		let testFirstCharacterCorrect = () =>
			helpers.firstCharacterCorrect("22345678912345", res);
		expect(testFirstCharacterCorrect).not.toThrowError(Error);
		testFirstCharacterCorrect = () =>
			helpers.firstCharacterCorrect("32345678912345", res);
		expect(testFirstCharacterCorrect).not.toThrowError(Error);
	});
	//lastCharacterCorrect
	it("throws an error when a string has 0 at the end in lastCharacterCorrect", () => {
		const testLastCharacterCorrect = () =>
			helpers.lastCharacterCorrect("1231231230", res);
		expect(testLastCharacterCorrect).toThrowError(
			"Last digit should be from 1-9"
		);
	});
	it("does not throw an error when a string last digit in between 1-9 in lastCharacterCorrect", () => {
		const testLastCharacterCorrect = () =>
			helpers.lastCharacterCorrect("1234321", res);
		expect(testLastCharacterCorrect).not.toThrowError(Error);
	});
	//getBirthDay
	it("throws an error when a date is not valid in getBirthDay", () => {
		const tesGetBirthDay = () => helpers.getBirthDay("2970832", res);
		expect(tesGetBirthDay).toThrowError("Birthday digits are invalid");
	});
	it("throws an error when a date is in the future in getBirthDay", () => {
		const tesGetBirthDay = () => helpers.getBirthDay("3970830", res);
		expect(tesGetBirthDay).toThrowError("Birthday date is in the future");
	});
	it("return a string containing a birthday in getBirthDay", () => {
		const result = helpers.getBirthDay("2970808", res);
		expect(result).toEqual("08/08/1997");
	});
	//getGovernorate
	it("throws an error when a governorate code is incorrect getGovernorate", () => {
		const tesGetGovernorate = () => helpers.getGovernorate("80", res);
		expect(tesGetGovernorate).toThrowError("Governorate digits are invalid");
	});
	it("return a governorate in getGovernorate", () => {
		const result = helpers.getGovernorate("27", res);
		expect(result).toEqual("Qena");
	});
    //getGender
	it("return a Female if digit is even in getGender", () => {
		const result = helpers.getGender("2");
		expect(result).toEqual("Female");
	});
	it("return a Male if digit is odd in getGender", () => {
		const result = helpers.getGender("3");
		expect(result).toEqual("Male");
	});
});
