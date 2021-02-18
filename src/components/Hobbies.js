import React, { useContext } from 'react';
import PersonContext from '../context/PersonContext';
import AddHobbiesForm from './AddHobbiesForm';

const Hoobies = () => {
  const {hobbies, updateHobbies} = useContext(PersonContext)
  const handleHobbies = (hobbie) => {
    updateHobbies(hobbies => [...hobbies, hobbie]) 
  }

  return (
    <div>
      <h3>Hobbies: </h3>
      <ul>
        {
          hobbies.map(hobbie => <li key={`key-${hobbie}`}>{hobbie}</li>)
        }
      </ul>
      <button className="btn btn-primary" onClick={() => updateHobbies(['Basquet', 'Natación', 'Testing'])}>Cambiar hoobies</button>
      <AddHobbiesForm handleHobbies={handleHobbies}/>
    </div>
  )
}

export default Hoobies;