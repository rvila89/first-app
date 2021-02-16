import React, { useContext, useEffect, useState } from 'react';
import Hobbies from './Hobbies';
import Count from './Count';
import PersonContext from '../context/PersonContext';
import CountriesList from './CountriesList';
import { CountriesProvider } from '../context/CountriesContext';

const Person = () => {
  const [count, setCount] = useState(0)
  const handleResetCount = () => setCount(0)

  useEffect(() => {
    console.log('Component Update')
  }, [])

  const { name, company, setCompany } = useContext(PersonContext)

  return (
    <div className="Person">
      <h1>{name}</h1>
      <p>Empresa: {company}</p>
      <button onClick={() => setCompany('Everis')}>Cambio de empresa</button>
      <button onClick={handleResetCount}>Reset Count</button>
      <Count count={count} updateCount={setCount}/>
      <Hobbies />
      <CountriesProvider>
        <CountriesList />
      </CountriesProvider>
    </div>
  ) 
}

export default Person;