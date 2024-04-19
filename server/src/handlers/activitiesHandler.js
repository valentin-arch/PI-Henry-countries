
const {postActivities, getAllActivities, deleteAct} = require("../controllers/activitiesController")
const {Country, Activity} = require("../db");
const getActivities =  async (req, res ) => {

const activities = await getAllActivities();
res.status(200).send(activities)

}

const createActivities = async (req, res) => {
const  {Name, Difficulty, Duration, Season, CountryId, Cost} = req.body;

try{
  const  newActivity = await postActivities(
        Name,
        Difficulty,
        Duration,
        Season,
        CountryId,
        Cost
        )
        res.status(201).json(`The activity ${Name} has been created!`)
}catch(error){
    res.status(400).json({error:error.message})
}
}

const deleteActivities = async (req,res) => {
    const {id} = req.params
   await  Activity.destroy({
    where:{
        id: id
    }
   }
   )
   res.status(200).send("Delete activity")
   }
            
   module.exports = {
       getActivities,
       createActivities,
       deleteActivities
       
   }
        
  
       
    

