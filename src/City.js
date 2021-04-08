import React from 'react';
import { Card } from 'react-bootstrap';

class City extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>{this.props.cityData.display_name}</Card.Title>
            <Card.Text>Latitude: {this.props.cityData.lat}</Card.Text>
            <Card.Text>Longitude: {this.props.cityData.lon}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default City;
