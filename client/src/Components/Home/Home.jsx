import React from "react";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards"
import NavBar from "../NavBar/NavBar"
import "./Home.css"
const Home = () => {
return (

<div className="complet">
<div className="fondo-home">
      <div className="nav-bar">
        <NavBar></NavBar>
        </div>
        <div className="cards">
        <Cards></Cards>
        </div>
       
     </div>
     </div>
     )
}

export default Home;
        
        
            
      

      
   
    