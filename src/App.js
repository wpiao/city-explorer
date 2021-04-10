import React from 'react';
import Search from './Search.js';
import City from './City.js';
import Error from './Error.js';
import Weather from './Weather.js';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchedYet: false,
      cityForSearch: '',
      isThereError: false,
      errorMessage: ''
    };
  }

  handleSearch = async (city) => {
    try {
      const response = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${city}&format=json`);
      const cityData = response.data[0];
      this.setState({
        isSearchedYet: true,
        isThereError: false,
        cityForSearch: cityData
      });

      const weatherResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather`, {
        params: {
          lat: cityData.lat,
          lon: cityData.lon
        }
      });
      this.setState({
        weatherData: weatherResponse.data
      });
    } catch (error) {
      this.setState({
        isSearchedYet: false,
        isThereError: true,
        errorMessage: error.toString()
      });
    }
  };

  render() {
    return (
      <div className="city-explorer">
        <h1>City Explorer</h1>
        <Search handleSearch={this.handleSearch} />
        {this.state.isSearchedYet ? <City cityData={this.state.cityForSearch} /> : ''}
        {this.state.weatherData ? <Weather data={this.state.weatherData} /> : ''}
        {this.state.isThereError ? <Error errorMessage={this.state.errorMessage} /> : ''}
        <footer>&copy; Wenhao Piao</footer>
      </div>
    );
  }
}

export default App;
