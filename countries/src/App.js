import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryInfo from './CountryInfo';
import Input from './Input';
import CountriesList from './CountriesList';

function App() {
  const [value, setValue] = useState('');
  const [countries, setCountries] = useState([]);

  const onChange = e => {
    setValue(e.target.value);
    console.log(value);
  };

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      // setCountriesInfo(response.data);
      // console.log(response.data);
      setCountries(response.data);
      // console.log(countries);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(countries);
  // console.log(Object.keys(countries));

  const countryNames = countries.map(country => country.name.common);
  console.log(countryNames);

  const normalizedValue = value.toLowerCase();

  const searchResult = () => {
    return countryNames.filter(countryName =>
      countryName.toLowerCase().includes(normalizedValue)
    );
  };
  // console.log('searchResult:', searchResult());

  const resultCountries = searchResult();
  console.log('resultCountries:', resultCountries);

  const countryInfo = countries.filter(
    country => country.name.common.toLowerCase() === value.toLowerCase()
  )[0];
  console.log('countryInfo: ', countryInfo);
  // console.log(countryInfo?.name?.common);
  // console.log(Object.keys(countryInfo[0]));

  return (
    <div>
      <Input text='Find countries' value={value} onChange={onChange} />

      {!value ? (
        <div></div>
      ) : countryInfo && resultCountries.length === 1 ? (
        <CountryInfo props={countryInfo} />
      ) : resultCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : resultCountries.length < 10 && resultCountries.length !== 1 ? (
        <CountriesList
          resultCountries={resultCountries}
          countries={countries}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
