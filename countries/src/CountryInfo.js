import LanguagesList from './LanguagesList';
import WeatherCapitalInfo from './WeatherCapitalInfo';

const CountryInfo = ({ countryView, weatherInCapital }) => {
  console.log(
    '🚀 ~ file: CountryInfo.js:6 ~ CountryInfo ~ countryView:',
    countryView
  );

  return (
    <>
      <h2>{countryView.name.common}</h2>
      <p>
        Capital: <b>{countryView.capital}</b>
      </p>
      <p>Population: {countryView.population}</p>
      <p>Area: {countryView.area} sq.kms</p>
      <LanguagesList languages={countryView.languages} />
      <img
        src={countryView.flags.png}
        alt={countryView.flags.alt}
        width='400'
      />
      <h2>Weather in {countryView.capital}</h2>
      <WeatherCapitalInfo weatherInCapital={weatherInCapital} />
    </>
  );
};

export default CountryInfo;
