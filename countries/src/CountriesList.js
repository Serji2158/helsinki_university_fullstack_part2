import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CountryInfo from './CountryInfo';

const CountriesList = ({ resultCountries, countries }) => {
  // console.log(resultCountries);
  // console.log('countries in CountriesList: ', countries);

  const [countryToShow, setCountryToShow] = useState('');
  // console.log('countryToShow:', countryToShow);

  const [weatherInCapital, setWeatherInCapital] = useState({});

  const countryView = countries.find(c => {
    // console.log('c.name.common:', c.name.common);
    // console.log('countryToShow inside CountryView:', countryToShow);
    return c.name.common === countryToShow.r;
  });
  console.log('countryView:', countryView);
  // console.log('countryView.capitalInfo.latlng[0]:', countryView.capitalInfo);

  const lat = countryView?.capitalInfo?.latlng[0];
  console.log('🚀 ~ file: CountriesList.js:23 ~ CountriesList ~ lat:', lat);
  const lon = countryView?.capitalInfo?.latlng[1];
  console.log('🚀 ~ file: CountriesList.js:25 ~ CountriesList ~ lon:', lon);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
      .then(response => {
        // console.log('response.data:', response.data);
        setWeatherInCapital(response.data);
        console.log('weatherInCapital:', weatherInCapital);
      });
  }, [API_KEY, lat, lon]);
  console.log('weatherInCapital:', weatherInCapital);

  const displayStyle = {
    display: 'inline-block',
    marginRight: 10,
  };
  return (
    <>
      {!countryView
        ? resultCountries.map((r, index) => (
            <ul>
              <li key={r[index]} style={displayStyle}>
                {r}
              </li>
              <button onClick={() => setCountryToShow({ r })}>Show</button>
            </ul>
          ))
        : weatherInCapital && (
            <CountryInfo
              countryView={countryView}
              weatherInCapital={weatherInCapital}
            />
          )}
    </>
  );
};

export default CountriesList;
