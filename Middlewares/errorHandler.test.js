const errorHandler = require("./errorHandler");

const httpMocks = require("node-mocks-http");

describe("errorHandler function", () => {
	let err = {};
	let req = httpMocks.createRequest({
		method: "GET",
		url: "/ID/29704308800136",
		params: {
			ID: "29704308800136",
		},
	});
	let next = jest.fn();
	let res = httpMocks.createResponse();
	it("returns assigned status code", () => {
		res.status(400);
		errorHandler(err, req, res, next);
		expect(res.statusCode).toEqual(400);
	});

	it("returns 500 if no status code is assigned", () => {
		res.statusCode = undefined;
		errorHandler(err, req, res, next);
		expect(res.statusCode).toEqual(500);
	});
});
