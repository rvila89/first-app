import React, { createContext, useEffect, useState } from 'react';
import { serviceCountryList } from '../services/serviceCountriesList';


const CountriesContext = createContext();

export const CountriesProvider = ({children}) => {
  const [europeCountries, setEuropeCountries] = useState([])
  
  useEffect(() => {
    serviceCountryList().then(response => setEuropeCountries(response))
  }, [])
  
  return (
    <CountriesContext.Provider value={europeCountries}>
      { children }
    </CountriesContext.Provider>
  )
}


export default CountriesContext
