import React from 'react'


export default function Activity({ name, duration, season, difficulty, countryId,id}) {
  return (
    <div className='divActivityContainer' key={id}>
       {/* <button  onClick={()=>deleteAct(id)}>x</button> */}
      <h2 className='h2Activity'>{name}</h2>
      <h3 className='h3Activity'>Duracion: {duration}</h3>
      <h3 className='h3Activity'>Temporada: {season}</h3>
      <h3 className='h3Activity'>Dificultad: {difficulty}</h3>
      <h3>{countryId}</h3>
    </div>
  );
}