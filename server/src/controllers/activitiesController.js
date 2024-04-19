const {Activity, Country} = require("../db");


const postActivities = async (Name, Difficulty, Duration, Season, countryId, Cost) => {
 const activitiesCreate = await Activity.create({
    Name,
    Difficulty,
    Duration,
    Season,
    countryId,
    Cost

 })
const countries = await Country.findAll({
    where:{
        id: countryId
    }
})

return activitiesCreate.addCountries(countries)

}

const getAllActivities = async () => {

   const getAct = await Activity.findAll();
   return getAct

}

const deleteAct = async (id)=> {
    const activities = await getAllActivities();
    const newAct =  await activities.filter((element, index)=>{
        if(element.id == id){
            activities.splice(index, 1)
        }
})
return newAct
}
module.exports = {
    postActivities,
    getAllActivities, 
    deleteAct
}