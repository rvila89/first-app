import React, { useContext } from 'react';
import CountriesContext from '../context/CountriesContext';
import PersonContext from '../context/PersonContext';
// import { serviceCountryList } from '../services/serviceCountriesList';
import Country from './Country';

const CountriesList = () => {
  const europeCountries = useContext(CountriesContext)
  
  return (
    <div className="container">
      <div className="row">
        { europeCountries.map(country => (
          <div className="col-md-3 mt-5" key={country.name}>
            <Country country={country} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CountriesList;