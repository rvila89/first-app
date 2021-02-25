import React, { useContext, useEffect, useState } from 'react';
import Hobbies from './Hobbies';
import Count from './Count';
import PersonContext from '../context/PersonContext';
import CountriesList from './CountriesList';
import { CountriesProvider } from '../context/CountriesContext';
import {
  Switch,
  Route
} from 'react-router-dom';
import NavBar from './NavBar';
import CountryDetail from './CountrInfo';

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
      <button className="btn btn-primary m-2" onClick={() => setCompany('Everis')}>Cambio de empresa</button>
      <button className="btn btn-primary m-2" onClick={handleResetCount}>Reset Count</button>
      <NavBar />
      <Switch>
        <Route path="/count">
          <Count count={count} updateCount={setCount}/>
        </Route>
        <Route path="/hobbies">
          <Hobbies />
        </Route>
        <Route exact path="/countries">
          <CountriesProvider>
            <CountriesList />
          </CountriesProvider>
        </Route>
        <Route path="/countries/:country">
          <CountryDetail />
        </Route>
      </Switch>
    </div>
  ) 
}

export default Person;