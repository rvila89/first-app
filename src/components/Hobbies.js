import React from 'react';

const Hoobies = (props) => {
  console.log('Componente Hobbie renderizado')
  return (
    <div>
      <h3>Hobbies: </h3>
      <ul>
        {
          props.hobbies.map(hobbie => <li key={`key-${hobbie}`}>{hobbie}</li>)
        }
      </ul>
    </div>
  )
}

export default Hoobies;