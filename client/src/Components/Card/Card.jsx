import React from "react"
import "./Card.css"


const Card = ({name, flag, continents, capital, population, id,}) => {

    return(
        <div className="card-container">
            <img className="imageCard" src={flag} alt="Image not found"></img>
            <div className="descripCont">
            <h1 className="card-name">{name}</h1>
            {/* <h5 className="card-info">Capital: {capital}</h5> */}
            <h5 className="card-info">Continent: {continents}</h5>
            <h5 className="card-info">Population: {population}</h5>
            </div>
        </div>
    )
}

export default Card
            