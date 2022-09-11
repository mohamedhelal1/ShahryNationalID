const basicValidation = require("./basicValidation");
const {
	containsOnlyNumbers,
	noWhiteSpace,
	hasCorrectLength,
	firstCharacterCorrect,
	lastCharacterCorrect,
} = require("../Helpers/NationalIDHelpers");

const httpMocks = require("node-mocks-http");

jest.mock("./../Helpers/NationalIDHelpers", () => {
	return {
		containsOnlyNumbers: jest.fn(() => {
			return true;
		}),
		noWhiteSpace: jest.fn((ID) => {
			return ID;
		}),
		hasCorrectLength: jest.fn(() => {
			return true;
		}),
		firstCharacterCorrect: jest.fn(() => {
			return true;
		}),
		lastCharacterCorrect: jest.fn(() => {
			return true;
		}),
	};
});

describe("basicValidation function", () => {
	let req = httpMocks.createRequest({
		method: "GET",
		url: "/ID/29704308800136",
		params: {
			ID: "29704308800136",
		},
	});
	let next = jest.fn();
	let res = httpMocks.createResponse();
	basicValidation(req, res, next);
	it("calls helper functions", () => {
		expect(containsOnlyNumbers).toHaveBeenCalledWith(req.params.ID, res);
		expect(hasCorrectLength).toHaveBeenCalledWith(req.params.ID, res);
		expect(firstCharacterCorrect).toHaveBeenCalledWith(req.params.ID, res);
		expect(lastCharacterCorrect).toHaveBeenCalledWith(req.params.ID, res);
		expect(noWhiteSpace).toHaveBeenCalledWith(req.params.ID);
	});

	it("calls next", () => {
		expect(next).toHaveBeenCalled();
	});
});
