import React from 'react';
import { Card } from 'react-bootstrap';

class Movie extends React.Component {
  render() {
    return (
      <Card>
        <Card.Img variant="top" src={this.props.url} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.release}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Movie;
