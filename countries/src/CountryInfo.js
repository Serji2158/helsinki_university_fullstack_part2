import React from 'react';
import LanguagesList from './LanguagesList';

const CountryInfo = ({ countryInfo }) => {
  console.log('countryInfo inside:', countryInfo);
  return (
    <>
      <h2>{countryInfo.name.common}</h2>
      <p>
        Capital: <b>{countryInfo.capital}</b>
      </p>
      <p>Population: {countryInfo.population}</p>
      <p>Area: {countryInfo.area} sq.kms</p>
      <LanguagesList languages={countryInfo.languages} />
      <img
        src={countryInfo.flags.png}
        alt={countryInfo.flags.alt}
        width='400'
      />
    </>
  );
};

export default CountryInfo;
