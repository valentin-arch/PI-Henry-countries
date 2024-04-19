const { Router } = require('express');
const { getCountriesHandler, getCountryId } = require("../handlers/countryHandler")

const router = Router();

router.get("/", getCountriesHandler);
router.get("/:id", getCountryId)

module.exports = router;