import {GET_COUNTRIES, GET_DETAIL, GET_NAME, FILTER_BY_CONTINENT, ORDER_BY_NAME, ASCENDENTE, ORDER_BY_POPULATION, HIGHER_POPULATION, RESET, POST_ACTIVITIES, GET_ACTIVITIES, FILTER_BY_ACTIVITIES,} from "./vars";

const initialState = {
    countries: [],
    allCountries: [],
    detail: [],
    activities:[]
}


 const rootReducer = (state = initialState, action ) => {
    switch(action.type) {
        case GET_COUNTRIES:
            return{
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
            case GET_NAME:
                return{
                    ...state,
                    countries: action.payload
                }
            case GET_DETAIL:
            return{
                    ...state, 
                    detail:action.payload
            }
            case RESET:
                return{
                    ...state,
                    detail:[],
                    countries:[]
                }
                
            
            case FILTER_BY_CONTINENT:
            const filterCountriesRegion = state.allCountries
            const continentFilter = action.payload !== "WORLD" ? filterCountriesRegion.filter(i=>i.continents === action.payload ) : filterCountriesRegion
   
        
            return{
                    ...state,
                    countries: continentFilter
                
            }
            case ORDER_BY_NAME:
                const orderCountriesByName = action.payload === ASCENDENTE ? state.countries.sort((a, b)=> {
                    if(a.name < b.name){
                        return -1
                    }
                    if(a.name > b.name){
                        return 1
                    }
                }) :
                state.countries.sort((a,b)=> {
                    if(a.name < b.name){
                        return 1
                    }
                    if(a.name > b.name){
                        return -1
                    }

                })

            return{
                ...state,
                countries: orderCountriesByName
            }
            case ORDER_BY_POPULATION:
                const orderPopulationCountries = action.payload === HIGHER_POPULATION ? state.countries.sort((a,b)=>{
                    if(a.population < b.population){
                        return 1
                    }
                    if(a.population > b.population){
                        return -1
                    }

                }):
                state.countries.sort((a,b)=>{
                    if(a.population < b.population){
                        return -1
                    }
                    if(a.population < b.population){
                        return 1
                    }
                    return 0
                })
                return{
                    ...state,
                    countries: orderPopulationCountries
                }
                case POST_ACTIVITIES:
                    return {
                        ...state
                    }
        
                case GET_ACTIVITIES:
                    return {
                        ...state,
                        activities: action.payload
                    }
             
                    case FILTER_BY_ACTIVITIES:
                        const filterActivities = state.allCountries
                        const filterAct = filterActivities.filter((c)=>{return c.Activities.find((c)=>{return c.Name === action.payload})})
                        if(action.payload ==="todos"){
                            return {
                                ...state,
                                 countries: filterActivities}
                        }else{
                            return{
                                ...state,
                                countries: filterAct
                            }
                        }
                        // case DELETE_ACTIVITIES:
                        //     const allAct = state.activities
                        //     const elimAct = allAct.indexOf(x)
                        //     if(elimAct>=0){
                        //         allAct.splice(x, 1)
                        //     }return {
                        //         ...state,
                        //         activities: elimAct
                        //     }
         


            default: return state;
    }
}


export default rootReducer