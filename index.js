const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const continentRoute = require("./routes/continentRoute");
const countryRoute = require("./routes/countryRouter");
const continentCountriesRoute = require("./routes/continentCountriesRoute");
const getOneCountry = require("./routes/getOneCountryRoute");

const port = process.env.PORT;

app.get("/", (req, res) => {
  console.log("Home Page...");
  res.send("Home Page...");
});

app.use("/api", continentRoute);
app.use("/api", countryRoute);
app.use("/api", continentCountriesRoute);
app.use("/api", getOneCountry);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
