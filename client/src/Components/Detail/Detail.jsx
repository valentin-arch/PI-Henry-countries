import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useParams, Link } from "react-router-dom";
import { getDetail, restart } from "../../Redux/actions";
import NavBar from "../NavBar/NavBar"
import load from "../../assets/world.gif"
import "./Detail.css"

const Detail = (props) => {
const dispatch =useDispatch()
const countriesId = useSelector((state)=>state.detail)
const {id} = useParams();
useEffect(()=>{
  dispatch(restart())
  dispatch(getDetail(id))
},[id])
// armar el restart 

// console.log(countriesId)

return(
   <div key={countriesId.id} className="detail">
    {console.log(countriesId)}
    <div className="navId">
        <NavBar></NavBar>
    </div>
  

    <div className="detailCont">
        {countriesId.length ? <div className="detailCard">
          <div className="contImage">
            <img className="objDetailImg" src={countriesId[0].flag} alt='Imagen no encontrada'  /></div>
            <h1 className="objId">{countriesId[0].id}</h1>
            <h1 className="objDetailName">{countriesId[0].name}</h1>
           <div className="detailDescrip">
            <h2>Continent: {countriesId[0].continents}</h2>
            <h2>Capital: {countriesId[0].capital}</h2>
            <h2>Area: {countriesId[0].area}</h2>
            <h2>Population: {countriesId[0].population}</h2>
            </div>
          
           <div  className="activitiesDetail">{countriesId[0].Activities?.map(el=>{
            return(
              <div key={el.id}>
                <Link className="linkAct" to="/activitieslist">
                <h1>Activity:</h1>
                </Link>
                <div className="objActivities" >
                  <h3>{el.Name}</h3>
                  <h3>Duration: {el.Duration}</h3>
                  <h3>Difficulty: {el.Difficulty}</h3>
                  <h3>Season: {el.Season}</h3></div> 
                  </div>
            )
           })}</div>


        </div>
         : 
        <div> 
       <img className="load" src={load} ></img>
       </div> 
       }       

        
    </div>
   </div>
   
)
}
//armar la activities

export default Detail

    
 

 

     
 