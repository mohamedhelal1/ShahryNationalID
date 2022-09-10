const express = require("express");
const router = express.Router();

const getIDInfo = require("../Controllers/getIDInfo");
const isValidID = require("../Middlewares/isValidID");

const use = (fn) => (req, res, next) => {
	Promise.resolve(fn(req, res, next)).catch(next);
};

router.route("/ID/:ID").get(use(isValidID), use(getIDInfo));

module.exports = router;
