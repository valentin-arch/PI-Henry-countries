import React from "react";
import "./Paginate.css"
const Paginate = ({countriesPerPage, countries, paginate}) => {
const pageNumbers = [];
const division = Math.ceil(countries/countriesPerPage)
for(let i = 0 ; i <division ; i++){
    pageNumbers.push(i+1);
}



return(
    <div className="container-paginate">
        <nav className="navPaginate">
            <ul className="container-paginate">
          
                {
                    pageNumbers.map(n => (
                        
                        <li key={n} className="paginate" >
                           
                        <button className="numberPaginate" onClick={()=>paginate(n)}>
                            {n}</button>
                            
                        </li>
                    ))
                }
            </ul>
            
        </nav>
    </div>
)
}
export default Paginate