import { Component } from 'react';
import WeatherDay from './WeatherDay.js';
import { Table } from 'react-bootstrap';

class Weather extends Component {
  render() {
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description (Unit: Celcius)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((eachDay, i) => (
              <WeatherDay
                key={i}
                date={eachDay.date}
                description={eachDay.description}
              />
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

export default Weather;
