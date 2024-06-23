const axios = require("axios");

const getCountries = async (req, res) => {
  try {
    const response = await axios.get("https://api.mirafgan.me/country");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCountryByName = async (req, res) => {
  try {
    const countryCCA2 = req.params.cca2;
    const response = await axios.get("https://api.mirafgan.me/country");
    const countries = response.data;
    const country = countries.filter(
      (country) => country.cca2.toUpperCase() === countryCCA2.toUpperCase()
    );

    console.log(country);

    if (country.length > 0) {
      res.json(country[0]);
    } else {
      res.status(404).json({ message: "Country not found..." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCountries, getCountryByName };
