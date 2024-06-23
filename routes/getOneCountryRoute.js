const express = require("express");
const { getCountryByName } = require("../controllers/countryController");
const router = express.Router();

router.get("/:cca2", getCountryByName);

module.exports = router;
