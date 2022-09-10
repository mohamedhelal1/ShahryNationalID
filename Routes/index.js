const express = require("express");
const router = express.Router();

const getIDInfo = require("../Controllers/getIDInfo");
const basicValidation = require("../Middlewares/basicValidation");

const use = (fn) => (req, res, next) => {
	Promise.resolve(fn(req, res, next)).catch(next);
};

router.route("/ID/:ID").get(use(basicValidation), use(getIDInfo));

module.exports = router;
