import React from 'react';
import PropTypes from 'prop-types';
import City from './City';
import './index.css';

const CityList = ({cityData, cityName}) => {
  return (<div className="city-data-container">
    <p className="city-title">
      {cityName}</p>
    <div className="city-data-row">
      <ul className="list-row">
        {
          cityData.map(col => <li key={col.dt}>
            <City imgSrc={`https://openweathermap.org/img/w/${col.weather[0].icon}.png`} description={col.weather[0].description} humidity={col.main.humidity} minTemp={Math.floor(col.main.temp_min - 273.15)} maxTemp={Math.floor(col.main.temp_max - 273.15)} date={col.dt}/>
          </li>)
        }
      </ul>
    </div>
  </div>)
}

CityList.propTypes = {
  cityData: PropTypes.array.isRequired,
  cityName: PropTypes.string.isRequired
}
export default CityList;
