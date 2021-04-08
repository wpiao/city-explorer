import React from 'react';
import Search from './Search.js';
import City from './City.js';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityForSearch: '',
    };
  }

  handleSearch = async (city) => {
    const response = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${city}&format=json`);
    this.setState({
      cityForSearch: response.data[0]
    });
  };

  render() {
    return (
      <>
        <header>City Explorer</header>
        <Search handleSearch={this.handleSearch} />
        <City cityData={this.state.cityForSearch} />
        <footer>&copy; Wenhao Piao</footer>
      </>
    );
  }
}

export default App;
