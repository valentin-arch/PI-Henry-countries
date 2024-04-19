import axios from "axios";
import {GET_COUNTRIES, GET_DETAIL, GET_NAME, FILTER_BY_CONTINENT, ORDER_BY_NAME, ORDER_BY_POPULATION, RESET, POST_ACTIVITIES, GET_ACTIVITIES, FILTER_BY_ACTIVITIES} from "./vars"

const server = ("http://localhost:3001/countries")


 export function getCountries () {
    return async (dispatch) =>{
        try {
            const contries = await axios.get("http://localhost:3001/countries");
            return dispatch({
                type: GET_COUNTRIES,
                payload: contries.data
            })
        }catch(error){
            console.log(error)
        }
    }
}

export function getDetail(id){
    return async (dispatch) => {
        try{
            let countriesId = await  axios.get(`http://localhost:3001/countries/${id}`);
            return dispatch({
                type: GET_DETAIL,
                payload: countriesId.data
            })
        }catch(error){
            console.log(error)
        }
    }
}
export function restart(){
    return(dispatch)=>{
        dispatch({
            type: RESET,
       
        })
    }
}

export function getCountriesName (name){
    return async function(dispatch){
        try{
            let countriesName = await axios.get(`http://localhost:3001/countries?name=${name}`)
            return dispatch({
                type: GET_NAME,
                payload: countriesName.data
            })
        }catch(error){
            alert("Country not found");
            console.log(error)
        }
    }
}
export function postActivities(payload){
    return async function(dispatch){
        try {
     const post =   await axios.post("http://localhost:3001/activities",payload)
        return dispatch({
            type: POST_ACTIVITIES,
            payload: post
         
        })
    }catch(error){
            console.log(error)
        }
       
    }
}
export function getActivities(){
    return async function(dispatch){
        let act = await axios.get("http://localhost:3001/activities");
        return dispatch({
            type: GET_ACTIVITIES,
            payload: act.data
        })
    }

}
export function filterForContinent(payload){
    return {
        type: FILTER_BY_CONTINENT,
        payload
}
}
export function orderByName(payload){
    return{
        type: ORDER_BY_NAME,
        payload
    }
}
export function orderByPopulation(payload){
    return{
        type: ORDER_BY_POPULATION,
        payload
    }
}
export function filterByActivities(payload){
    return{
        type: FILTER_BY_ACTIVITIES,
        payload
    }
}
// export function deleteActivities(id){
//     return async function(dispatch){
//         try {
//      const deleteAct =   await axios.delete(`http://localhost:3001/activities${id}`)
//         return dispatch({
//             type: DELETE_ACTIVITIES,
//             payload: deleteAct
         
//         })
//     }catch(error){
//             console.log(error)
//         }
       
//     }
// }

