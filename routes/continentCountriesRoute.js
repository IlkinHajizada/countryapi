const express = require("express");
const {
  getContinentCountries,
} = require("../controllers/continentCountryController");
const router = express.Router();

router.get("/:continent/countries", getContinentCountries);

module.exports = router;
