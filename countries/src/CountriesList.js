import React, { useState } from 'react';
import CountryInfo from './CountryInfo';

const CountriesList = ({ resultCountries, countries }) => {
  // console.log(resultCountries);
  // console.log('countries in CountriesList: ', countries);

  const [countryToShow, setCountryToShow] = useState('');
  // console.log('countryToShow:', countryToShow);

  const countryView = countries.find(c => {
    // console.log('c.name.common:', c.name.common);
    // console.log('countryToShow inside CountryView:', countryToShow.r);
    return c.name.common === countryToShow.r;
  });
  console.log('countryView:', countryView);

  const displayStyle = {
    display: 'inline-block',
    marginRight: 10,
  };
  return (
    <>
      {!countryView ? (
        resultCountries.map((r, index) => (
          <ul>
            <li key={r[index]} style={displayStyle}>
              {r}
            </li>
            <button onClick={() => setCountryToShow({ r })}>Show</button>
          </ul>
        ))
      ) : (
        <CountryInfo props={countryView} />
      )}
    </>
  );
};

export default CountriesList;
