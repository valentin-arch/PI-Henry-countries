const { Router } = require("express");

const {getActivities, createActivities, deleteActivities} = require("../handlers/activitiesHandler")
const router = Router();

router.get("/",getActivities)
router.post("/",createActivities)
router.delete("/:id", deleteActivities)




module.exports = router;