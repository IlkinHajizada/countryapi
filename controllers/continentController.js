const { default: axios } = require("axios");

const getContinents = async (req, res) => {
  try {
    const response = await axios.get("https://api.mirafgan.me/country");
    const countries = response.data;

    // Extract continents and remove duplicates
    const continents = countries
      .map((country) => country.region)
      .filter(
        (continent, index, self) =>
          continent && self.indexOf(continent) === index
      );

    res.json(continents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getContinents };
