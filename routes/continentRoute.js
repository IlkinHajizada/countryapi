const express = require("express");
const { getContinents } = require("../controllers/continentController");
const router = express.Router();

router.get("/continents", getContinents);

module.exports = router;
