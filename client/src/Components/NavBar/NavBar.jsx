import { Link } from "react-router-dom"
import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import "./NavBar.css"





const  NavBar = () => {
    return(
        <div className="navBarContainer">
            <div className="containersBanner">
                <div></div>
                <div></div>
                <div className="navContent">
                <Link className="navLink" to="/home">Home</Link>
                <Link className="navLink" to="/activities">Create Activities</Link>
                <Link className="navLink" to="/activitieslist">List Actitivities</Link>
               
                </div>
                
               
            </div>
        </div>
    )
}
// ver luego si agregar list activities
export default NavBar