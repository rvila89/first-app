import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
  const { country } = useParams();
  return (
    <>
      <h2>Country: </h2>
      <span>{country}</span>
    </>
  )
}

export default CountryDetail;