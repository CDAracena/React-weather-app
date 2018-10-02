import React from 'react';
import './index.css';

const City = ({name, currentTemp, imgSrc, description, humidity}) => {
  return (<div className="city-card-container">
    <div className="city-name">
      {name}
    </div>
    <div className="city-icon">
      <img src={imgSrc} alt={description}/>
    </div>
    <div className="city-weather">
      {currentTemp}, {humidity}
    </div>
    <div className="city-description">
      {description}
    </div>
  </div>)
}

export default City;
