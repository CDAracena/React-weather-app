import React from 'react';
import './index.css';

const City = ({name, currentTemp, imgSrc, description, humidity})=> {

  return(
    <div className="city-card-container">
      <div className="city-name">
        {name}
      </div>
      <div className="city-icon">
        {imgSrc}
      </div>
      <div className="city-weather">
        {currentTemp}, Humidity: {humidity}
      </div>
    </div>
  )
}

export default City;
