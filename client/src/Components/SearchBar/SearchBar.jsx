import { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCountriesName } from '../../Redux/actions';
import "./SearchBar.css"



const SearchBar = ({setpage, getCountries}) => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const countries = useSelector(state=>state.countries)
    function handleChange(e){
        setName(e.target.value);
        e.target.value.length === 1 ?getCountries():setName(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(getCountriesName(name));
        setpage(1)
    }
    function reload(e){
        // e.preventDefault();
        dispatch(getCountries())
        setName("")
      }
console.log(name)

    return(
        
        <div className='searchBarContent'>
              <button id="button1" className="reloadbutton" onClick={(e)=> reload(e)}></button>
            <form onSubmit={handleSubmit}>
            <input className="inputCountry" type="text" placeholder=' Insert country..' onChange={handleChange} value={name} ></input>
            
            <button className='inputBtn' type='submit' value=""></button>
            </form>
        </div>
    )
}

export default SearchBar