import React from 'react';
import LanguagesList from './LanguagesList';

const CountryInfo = ({ props }) => {
  console.log('props inside:', props);
  return (
    <>
      <h2>{props.name.common}</h2>
      <p>
        Capital: <b>{props.capital}</b>
      </p>
      <p>Population: {props.population}</p>
      <p>Area: {props.area} sq.kms</p>
      <LanguagesList languages={props.languages} />
      <img src={props.flags.png} alt={props.flags.alt} width='400' />
    </>
  );
};

export default CountryInfo;
