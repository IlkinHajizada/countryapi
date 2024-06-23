const express = require("express");
const {
  getCountries,
  getCountryByName,
} = require("../controllers/countryController");
const router = express.Router();

router.get("/countries", getCountries);
router.get("/country/:cca2", getCountryByName);

module.exports = router;
