import React from 'react';
import Search from './Search.js';
import City from './City.js';
import Error from './Error.js';
import Weather from './Weather.js';
import Movie from './Movie.js';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSearch = city => {
    axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${city}&format=json`)
      .then(response => response.data[0])
      .then(cityData => {
        this.setState({
          cityForSearch: cityData,
          cityErrorMessage: ''
        });
        this.getWeatherData(cityData);
        this.getMovies(city);
      })
      .catch(error => {
        this.setState({
          cityForSearch: '',
          cityErrorMessage: error.message
        });
      });
  }

  getWeatherData = cityData => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather`, {
      params: {
        lat: cityData.lat,
        lon: cityData.lon
      }
    })
      .then(response => {
        this.setState({
          weatherData: response.data,
          weatherErrorMessage: ''
        });
      })
      .catch(error => {
        this.setState({
          weatherData: '',
          weatherErrorMessage: error.message
        });
      });
  }

  getMovies = location => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies`, {
      params: {
        location: location
      }
    })
      .then(response => {
        this.setState({
          movieData: response.data,
          movieErrorMessage: ''
        });
      })
      .catch(error => {
        this.setState({
          movieData: '',
          movieErrorMessage: error.message
        });
      });
  }
  render() {
    return (
      <div className="city-explorer">
        <h1>City Explorer</h1>
        <Search handleSearch={this.handleSearch} />
        {this.state.cityForSearch ? <City cityData={this.state.cityForSearch} /> : ''}
        {this.state.cityErrorMessage ? <Error cityErrorMessage={this.state.cityErrorMessage} /> : ''}
        {this.state.weatherData ? <Weather data={this.state.weatherData} /> : ''}
        {this.state.weatherErrorMessage ? <Error weatherErrorMessage={this.state.weatherErrorMessage} /> : ''}
        {this.state.movieData ? <Movie movies={this.state.movieData} /> : ''}
        {this.state.movieErrorMessage ? <Error movieErrorMessage={this.state.movieErrorMessage} /> : ''}
        <footer>&copy; Wenhao Piao</footer>
      </div>
    );
  }
}

export default App;
