import React from 'react';
import '../styles/Country.css';

const Country = ({country}) => {
  const { flag, name } = country
  return (
    <div className="card">
      <img src={flag} alt={name}/>
        <div className="card-body">
          <h3>{name}</h3>
        </div>
    </div>
  )
}

export default Country