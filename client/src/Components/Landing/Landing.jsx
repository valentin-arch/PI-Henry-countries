import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css"
import image from "../../assets/otrofigparaellanding.gif"
const Landing = () => {
return (
        <div className="landing-Back">
<div className="landingContain">
        <div className="imageLanding">
        <img src={image}/>
        </div>
        <div className="welcome">
        <h1 className="landingWelcome">Welcome to the Countries Project</h1>
       
        </div>
        <div  className="buttonHome">
        <Link to="/home"> 
        <button className="btnBtn" >
                <h2> GO!</h2>
              
        </button>
        </Link>
        </div>
        </div>
    
     </div>
     )
}

export default Landing;