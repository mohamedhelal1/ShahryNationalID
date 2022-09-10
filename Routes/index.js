const express = require("express");
const router = express.Router();

const getIDInfo = require('../Controllers/getIDInfo')
const isValidID = require('../Middlewares/isValidID')

router.route("/ID").get(isValidID, getIDInfo);


module.exports = router;
