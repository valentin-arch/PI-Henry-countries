const { Router } = require('express');
const router = Router();
const countriesRoute = require("./countriesRoute.js")
const activitiesRoute = require("./activitiesRoute.js")

router.use("/countries", countriesRoute)
router.use("/activities",activitiesRoute)


module.exports = router;