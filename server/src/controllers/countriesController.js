
const { Sequelize } = require("sequelize");
const  { Country, Activity } = require("../db");
const { getDbInfo } = require("./infoApiDb");
const Op = Sequelize.Op;



const getCountriesName = async(name) => {
const countriesNameAll =  await getDbInfo();
if(name){
let countryName = await countriesNameAll.filter(el=> el.name.toLowerCase().includes(name.toLowerCase()))
// let countryName = await Country.findAll({ include: Activity })
return countryName

}
}
  // const countryQuery = await Country.findAll({
  //   where:{
  //     name:{
  //       [Op.iLike]: `%${name}%`
  //     }
  //   },
  //   include: Activity
  // });
  // if(!countryQuery[0]){
  //   console.log("error")
  // }
  

const getCountriesId = async(id) =>{
  const allCountries = await getDbInfo();
  if(id){
        let countriesId = await allCountries.filter(el=>el.id== id.toUpperCase())
        
        return countriesId
    }
    
  }
  

  module.exports = {
      getCountriesName,
      getCountriesId,
  }

 





        
     




 




  
  