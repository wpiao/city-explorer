import { Component } from 'react';
import { Table } from 'react-bootstrap';

class Weather extends Component {
  render() {
    return (
      <>
        <h2>City name: will be updated soon</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((eachDay, i) => (
              <tr key={i}>
                <td>{eachDay.date}</td>
                <td>{eachDay.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

export default Weather;
