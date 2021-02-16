import React, { useContext } from 'react';
import PersonContext from '../context/PersonContext';

const Hoobies = () => {
  const {hobbies, updateHobbies} = useContext(PersonContext)

  return (
    <div>
      <h3>Hobbies: </h3>
      <ul>
        {
          hobbies.map(hobbie => <li key={`key-${hobbie}`}>{hobbie}</li>)
        }
      </ul>
      <button onClick={() => updateHobbies(['Basquet', 'Natación', 'Testing'])}>Cambiar hoobies</button>
    </div>
  )
}

export default Hoobies;