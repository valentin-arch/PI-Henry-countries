import React from "react";
import { useSelector } from "react-redux";
import Activity from "./Activity";
import NavBar from "../NavBar/NavBar";
import "./ActivityList.css";

export default function ActivitiesList() {
  const activities = useSelector((state) => state.activities);
  
  return (
    <div className="activityListContainer">

      <div className="navActList">
        <NavBar />
      </div>
    {console.log(activities)}
      <div className="activityCardListContainer">
        
        {
      activities?.map((acc) => {
          return (
            <div className="activityCardList" >
               <Activity
                id={acc.id}
                // deleteAct ={deleteAct}
                name={acc.Name}
                duration={acc.Duration}
                season={acc.Season}
                difficulty={acc.Difficulty}
              />
            </div> 
          )
        })}
      </div>
      
    </div>
  );
}
              