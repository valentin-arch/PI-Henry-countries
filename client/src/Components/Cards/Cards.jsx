import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries, filterForContinent, orderByName, orderByPopulation, getActivities, filterByActivities, restart } from "../../Redux/actions";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
import "./Cards.css"
import SearchBar from "../SearchBar/SearchBar";
import { ALL_AFRICA, ALL_AMERICA_S, ALL_AMERICA_N, ALL_ANTARTICA, ALL_ASIA, ALL_EUROPE, ALL_OCEANIA, WORLD, ASCENDENTE, DESCENDENTE, HIGHER_POPULATION, LESS_POPULATION } from "../../Redux/vars";
import  githubicon  from "../../assets/githubicon.png";
import  linkedinicon from "../../assets/linkedinicon.png";
import instagramicon from "../../assets/instafoto.png";

const Cards = () => {
const dispatch = useDispatch();
const activities = useSelector((state)=>state.activities);
const countries = useSelector((state)=>state.countries)

const [currentPage, setCurrentPage] = useState(1);
const [countriesPerPage] = useState(8);
const lastCountry = currentPage * countriesPerPage;
const firtsCountry = lastCountry - countriesPerPage;
const currentCountry = countries.slice(firtsCountry, lastCountry)
const [, setOrden] =useState("")

console.log(currentCountry)
console.log(countries)
useEffect(() => {
    dispatch(restart())
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);


const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
};


// console.log(currentCountry)
function handlerFilterContinent  (e) {
  dispatch(filterForContinent(e.target.value));
  setCurrentPage(1);

}
function handlerOrderCountries (e){
  dispatch(orderByName(e.target.value));
  setCurrentPage(1)
  setOrden(`Ordenado ${e.target.value}`);
}
function handlerFilterByPopulation(e){
  dispatch(orderByPopulation(e.target.value));
  setCurrentPage(1)
  setOrden(`Ordenado ${e.target.value}`);
}
function handlerFilterByActivities(e){
  dispatch(filterByActivities(e.target.value));
  setCurrentPage(1)
  
}


return(
    <div className="all-cards" >
      <div className="filter-container">
       <select className="filters" onChange={(e)=> handlerFilterContinent(e)}>
        <option  value={WORLD}>World</option>
        <option value={ALL_AMERICA_S}>America del Sur</option>
        <option value={ALL_AMERICA_N}>America del Norte</option>
        <option value={ALL_AFRICA}>Africa</option>
        <option value={ALL_ANTARTICA}>Antartica</option>
        <option value={ALL_ASIA}>Asia</option>
        <option value={ALL_EUROPE}>Europe</option>
        <option value={ALL_OCEANIA}>Oceania</option>
      </select>
        <select className="filters" onChange={(e)=> handlerOrderCountries(e)}>
        <option value={ASCENDENTE}>A-Z</option>
        <option value={DESCENDENTE}>Z-A</option>
        </select>
        <select  className="filters" onChange={(e)=> handlerFilterByPopulation(e)}>
        <option value={HIGHER_POPULATION}>Higher population</option>
        <option value={LESS_POPULATION}>Less population</option>
        </select>
        <select className="filters" onChange={(e)=> handlerFilterByActivities(e)}>
          <option value="todos">Activities</option>
          {
          activities?.map(a=>{
            return (
            
            <option key={a.id} value={a.Name}>{a.Name}</option>
          )})}
        </select>
            </div>


     
       

        
              

      <div className="searchBarCards">
     
      <SearchBar setpage={setCurrentPage} getCountries={getCountries} ></SearchBar>
      </div>
        <div className="cards-container">
            {
               
                currentCountry.map((c)=>{
                    return(
                        <div key={c.id}>
                           <Link to={"/country/" + c.id}>
                             <Card
                                name={c.name}
                                flag={c.flag}
                                continents={c.continents}
                                capital={c.capital}
                                population={c.population}
                                activities={c.Activities}
                                />
                             </Link>
                             </div>
                             
                               )
                            })
                        }
                               </div>
                               <div className="paginateCont">
<Paginate countriesPerPage={countriesPerPage}
countries={countries.length}
paginate={paginado}
 /> 
       </div>
       <section className="social">
    <h2>Creado por Valentin Re para el PI de #soyHenry</h2>
    <div className="redes">
                <div class="links">
                     
                    <a href="https://github.com/caapuu-nico" target="_black">
                        <i className="github">
                            <img src={githubicon} ></img>
                        </i>
                    </a>
                    <a href="https://www.linkedin.com/in/nicolas-del-vecchio-401a48195/" target="_black">
                        <i className="linkedin">
                            <img src={linkedinicon} ></img>
                        </i>
                    </a>
                    <a href="https://www.instagram.com/nico.delvecchio/" target="_black">
                        <i className="instagram">
                            <img  src={instagramicon}></img>
                        </i>
                    </a>
                </div>
                </div>
</section>
    </div>
)
}
export default  Cards

/* TAREAS A COMPLETAR: 
---BACK END---

** HACER UN TESTING

---FRONT END---


**  RESPONSIVE




---PUNTOS EXTRA---
** HACER UN TESTING DEL FRONT
** CREAR UN BUSCADOR MAS EFICIENTE QUE VAYA BORRANDO LOS COUNTRIES MIENTRAS SE HACE EL INPUT

----TEORIA A REPASAR---
REPASAR SEQUELIZE A FONDO
REPASAR EXPRESS
REPASAR REACT - REDUX
REPASAR FUNCIONES DE JAVASCIPT
ENTENDER BIEN NUESTRO CODIGO , COMO SE CONECTA Y COMO FUNCIONA*/