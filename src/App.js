import React from 'react';
import axios from 'axios'
import Logo from './Logo'
import City from './City';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }
  state = {
    currentCity: '',
    cityName: '',
    cityTemp: '',
    cityIcon: '',
    cityHumidity: ''

  }

  handleKeyUp(e) {
    this.setState({
      currentCity: e.target.value
    }, function() {})
  }

  handleSearch() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.currentCity + '&appid=d2759249bf9ce3e1e3b6a45433e4299f'}`).then(function(response) {
      console.log(response.data)
      this.setState({cityName: response.data.name, cityTemp: response.data.main.temp, cityHumidity: response.data.main.humidity}, function(){

      })
    }.bind(this))

  }

  render() {
    return (<div className="main-container">
      <h1 className="app-title">
        Me Weather
        <p>
          Start Searching By City</p>
      </h1>
      <div className="nav-menu">
        <Logo headLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Weather-sun-clouds-rain.svg/1024px-Weather-sun-clouds-rain.svg.png"/>
        <input type="text" onChange={this.handleKeyUp} className="nav-item search-bar"/>
        <button onClick={this.handleSearch} className="nav-item search-btn">
          Search
        </button>

      </div>
      <div className="body">
        <City name={this.state.cityName} currentTemp={this.state.cityTemp} humidity={this.state.cityHumidity}/>
      </div>
    </div>)
  }
}

export default App;
