import React, { createContext, useState } from 'react';

const PersonContext = createContext();

export const PersonProvider = ({children}) => {
  const [name] = useState('Roger')
  const [company, setCompany] = useState('Atmira')
  const [hobbies, updateHobbies] = useState(['Futbol', 'Ciclismo', 'Desarrollo Software'])
  
  return (
    <PersonContext.Provider value={{
      name,
      company,
      setCompany,
      hobbies,
      updateHobbies
    }}>
      {children}
    </PersonContext.Provider>
  )
}

export default PersonContext;