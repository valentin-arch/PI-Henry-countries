import React, { useEffect, useState } from "react"
import NavBar from "../NavBar/NavBar"
import { useDispatch, useSelector } from "react-redux"
import  {useNavigate}  from "react-router-dom";
import { getActivities, getCountries, postActivities } from "../../Redux/actions";
import {AUTUMN,SPRING,SUMMER,WINTER} from "../../Redux/vars"
import "./Activities.css"
const activitiesValidate =(input)=> {
    let errors={}
    if(!input.Name){
        errors.Name = "You must complete this field"
    } if(input.Name.length >= 20){
        errors.Name = "No puede tener mas de 10 caracteres"
    }
    else if(!input.Duration){
        errors.Duration ="You must complete this field"
    }else if(!input.Difficulty){
        errors.Difficulty = "You must select the difficulty"
    }else if(!input.Season){
        errors.Season = "You must select the season"
    }if(!input.CountryId == []){
        errors.CountryId = "You must select the countries"
    }
    return errors;

}
const  formActivities = () =>{
    const dispatch = useDispatch();
    const history = useNavigate();
    const countries = useSelector((state)=> state.allCountries)
    const [errors, setErrors]=useState({}) 
    const [input, setInput] = useState({
        Name:"",
        Duration:"",
        Difficulty:"",
        Season:"",
        CountryId:[]
    })
    useEffect(()=>{
        dispatch(getCountries())
        dispatch(getActivities());
        
    },[dispatch])

    const handleChange = (e)=> {
        const property = e.target.name;
        const value = e.target.value
        setInput({
            ...input,
            [property]:value
        });
        setErrors(
            activitiesValidate({
                ...input,
                [property]: value
            })
        )
    }
    // faltaria el hablder delete
    console.log(input)

    const handleSelect= (e) => {
      
        const value = e.target.value
        setInput({
            ...input,
            CountryId:
            [...input.CountryId, value]
        })
        // setErrors(
        //     activitiesValidate({
        //         ...input
        //     })
        // )
        
    }
    const handleDelete = (i)=> {
        setInput({
          ...input,
          CountryId: input.CountryId.filter((el) => el !== i),
        });
      }

    function handleSubmit  (e) { // (e) recibe el evento 
        e.preventDefault(); // no me recarges la pagina cuando toca boton de submit solamente en el submit
        if(input.Name === "" ||
        input.Difficulty==="" ||
        input.Duration ==="" ||
        input.Season ==="" ||
        input.CountryId.length === 0)
        return alert("Please complete the files!!");
        dispatch(postActivities(input))
        // console.log(postActivities(input))
        alert("Activity created successfully!!");
        setInput({
            Name:"",
            Duration:"",
            Difficulty:"",
            Season:"",
            CountryId:[],
        });
        history("/home")

    }
    return(
        <div className="allCreate">
        <div className="navBarCont">
        <NavBar></NavBar>
        </div>
        <div className="activityContainer">
            <div className="cardContainer">
                <form className="formActivity" onSubmit={handleSubmit}>
                    <span className="titleCreatAct">
                        <h1>
                        create activity
                            </h1></span>
                    <div className="inputs">
                        <label className="labels">Activity:</label>
                        <input className="input"
                                type="text"
                                placeholder="Input activity"
                               value={input.Name}
                                name="Name"
                               onChange={handleChange}                               
                              ></input>
                                {errors.Name && <p className="error"  required >{errors.Name}</p>}
                    </div>
                    <div className="inputs">
                        <label className="labels">Duration:</label>
                        <input className="input"
                                type="text"
                                placeholder="Input duration"
                                value={input.Duration}
                                name="Duration"
                                onChange={handleChange}
                                ></input>
                                     {errors.Duration && <p className="error">{errors.Duration}</p>}
                    </div>
                    <div className="inputs">
                        <label className="labels">Difficulty:</label>
                        <input className="input"
                                type="range"
                                placeholder="Input season"
                                min="1"
                                max="5"
                                value={input.Difficulty}
                                name="Difficulty"
                                onChange={(e)=>handleChange(e)}
                                ></input>
                                    {errors.Difficulty && <p className="e"> {errors.Difficulty}</p>}                                
                    </div>
                    <div className="inputsSeason">
                        <select className="input"
                                placeholder="Input season"
                                value={input.Season}
                                name="Season"
                                onChange={handleChange}
                                >
                                    <option className="season1" >Season</option>
                                    <option className="season" value={WINTER}>Winter</option>
                                    <option className="season" value={AUTUMN}>Autumn</option>
                                    <option className="season" value={SPRING}>Spring</option>
                                    <option className="season" value={SUMMER}>Summer</option>
                                    </ select>
                                    {errors.Season && <p className="e">{errors.Season}</p>}
                    </div>
                    <div className="contCountry" >
                    <select className="selCountry" name="CountryId" placeholder="Select countries"  onChange={handleSelect}>
                        <option className="opSel">Countries</option>
                        {                            
                            countries?.map((c)=>(
                            <option  key = {c.id} className="opSel" value={c.id}>{c.name}</option>                             
                            ))}
                    </select>                       
                        {errors.CountryId && <p className="e">{errors.CountryId}</p>}                            
                    </div>
                 
                    <div className="textSel">
                        {
                        input.CountryId?.map((c)=> (                          
                            <div className="countryBtn" >
                                <button key={c.CountryId} className="btnDelete" type="button" value="X" onClick={()=> handleDelete(c)}>
                                <p className="ofCountry">{c}</p>
                                </button> </div>
                        ))}
                    </div>
                    <div>
                        <button className="btnAct" type="submit">Crear Actividad</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}
                                
                               
                            

export default formActivities