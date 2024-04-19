import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  { Route, Routes } from 'react-router-dom'
import  Landing  from "../src/Components/Landing/Landing"
import Home from "../src/Components/Home/Home"
import Detail from './Components/Detail/Detail'
import Activities from "./Components/Activities/Activities"
import ActivitiesList from './Components/Activities/ActivityList'

function App() {

  return (
    <div>
    
   
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} /> 
        <Route exact path="/country/:id" element={<Detail />} />
        <Route exact path="/activities" element={<Activities/>}/>
        <Route exact path="/activitieslist" element={<ActivitiesList />}/>
      </Routes>

  </div>
    )
}

export default App
