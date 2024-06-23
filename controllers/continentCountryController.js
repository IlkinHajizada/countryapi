const { get } = require("../routes/countryRouter");
const axios = require("axios");

const getContinentCountries = async (req, res) => {
  try {
    console.log("Params:", req.params);
    const continent = req.params.continent;
    console.log("Continent:", continent);

    const response = await axios.get("https://api.mirafgan.me/country");
    const countries = response.data;
    console.log("Countries fetched:", countries.length);

    const countriesByContinent = countries.filter(
      (country) => country.region === continent
    );

    console.log("Continent countries fetched:", countriesByContinent.length);

    if (countriesByContinent.length === 0) {
      return res
        .status(404)
        .json({ message: `No countries found in continent: ${continent}` });
    }

    res.json(countriesByContinent);
  } catch (error) {
    console.error("Error fetching countries:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getContinentCountries };
