const axios = require("axios");
const {Country, Activity} = require("../db");
const  API  =  "http://localhost:5000/countries"

const getAllCountries = async  () => {
    const allCountries = await axios.get(API);
    const countries = await allCountries.data.map((el) => {
        return{
            id:el.cca3,
            name:el.name.common,
            flag:el.flags.png,
            continents:el.continents[0],
            capital:el.capital ?.[0] || "Desconocido",
            subregion:el.subregion,
            area:el.area,
            population:el.population
        };
    });
    
    return countries
}
const save = async () => {
    const allCountriesApi = await getAllCountries();
    await Country.bulkCreate(allCountriesApi)
    return allCountriesApi
   
}


const getDbInfo = async () => {
    // await save()
    const aux = await Country.findAll({
        include:{
            model: Activity,
            attributes: ["Name" , "Difficulty", "Duration","Season"],
            through:{
                attributes: [],
            }
        }
    })
//    console.log(aux)
return aux
}

module.exports = {  getDbInfo, save }

    

    




   
 

