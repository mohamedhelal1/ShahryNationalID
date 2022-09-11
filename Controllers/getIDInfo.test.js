const getIDInfo = require("./getIDInfo");
const {
	getBirthDay,
	getGovernorate,
	getGender,
} = require("../Helpers/NationalIDHelpers");

const httpMocks = require("node-mocks-http");

jest.mock("./../Helpers/NationalIDHelpers", () => {
	return {
		getBirthDay: jest.fn(() => {
			return "30/04/1997";
		}),
		getGovernorate: jest.fn(() => {
			return "Outside Egypt";
		}),
		getGender: jest.fn(() => {
			return "Male";
		}),
	};
});

describe("getIDInfo function", () => {
	let req = httpMocks.createRequest({
		method: "GET",
		url: "/ID/29704308800136",
		params: {
			ID: "29704308800136",
		},
	});

	let res = httpMocks.createResponse();
	getIDInfo(req, res);
	it("calls helper functions", () => {
		expect(getBirthDay).toHaveBeenCalledWith(
			req.params.ID.substring(0, 7),
			res
		);
		expect(getGovernorate).toHaveBeenCalledWith(
			req.params.ID.substring(7, 9),
			res
		);
		expect(getGender).toHaveBeenCalledWith(req.params.ID.charAt(12));
	});

	it("returns an object with national ID data", () => {
		expect(res.statusCode).toEqual(200);
		expect(res._isJSON()).toEqual(true);
		expect(res._getJSONData()).toEqual({
			birthday: "30/04/1997",
			birthGovernorate: "Outside Egypt",
			gender: "Male",
		});
	});
});
