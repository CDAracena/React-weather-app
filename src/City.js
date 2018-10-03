import React from 'react';
import './index.css';

const City = ({
  imgSrc,
  description,
  humidity,
  minTemp,
  maxTemp,
  date
}) => {
  return (<div className="city-card-container">
    <div className="weather-date">
      {date}
    </div>

    <div className="city-icon-div">
      <img src={imgSrc} alt={description} className="city-icon"/>
    </div>
    <div className="city-weather">
      Humidity:{humidity}
    </div>
    <div className="min-max-temps">

      <span className="min-temp">Min:{minTemp}</span> <span className="max-temp"> Max:{maxTemp}</span>
    </div>
    <div className="city-description">
      {description}
    </div>
  </div>)
}

export default City;
