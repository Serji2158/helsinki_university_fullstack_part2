import React from 'react';

const CountriesList = ({ resultCountries }) => {
  console.log(resultCountries);
  return (
    <>
      {resultCountries.map((r, index) => (
        <ul>
          <li key={r[index]}>{r}</li>
        </ul>
      ))}
    </>
  );
};

export default CountriesList;
