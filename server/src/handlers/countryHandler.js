const { getCountriesName,  getCountriesId} = require("../controllers/countriesController")
const {getDbInfo} = require("../controllers/infoApiDb");


const getCountriesHandler = async (req, res) => {
    const {name} = req.query
  
    const database = await getDbInfo();
    if(name){
      let countrieName = await getCountriesName(name);
      countrieName.length ? 
      res.status(200).send(countrieName):
      res.status(404).send(`Country with the name ${name} not found`)
    }
  else{
    res.status(200).send(database);
  }}

const getCountryId = async(req, res) =>{
    const {id} = req.params
   
    const countries = await getDbInfo();
    if(id){
      let  countryid = await getCountriesId(id)
      countryid.length ? 
      res.status(200).send(countryid):
      res.status(404).send(`Country with id:${id} not found`)
    }
}

module.exports = {
    getCountriesHandler,
    getCountryId
}