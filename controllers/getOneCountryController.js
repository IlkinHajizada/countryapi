const axios = require("axios");

const getOneCountry = async (req, res) => {
  try {
    const countryCCA2 = req.params;
    const countries = await axios.get("https://api.mirafgan.me/country");

    const country = countries.filter((country) => country.cca2 === countryCCA2);

    if (country.length === 0) {
      return res.status(404).json({
        message: "There is no such a country.",
      });
    }

    res.json(country);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getOneCountry;
