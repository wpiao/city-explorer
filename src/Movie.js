import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

class Movie extends React.Component {
  render() {
    return (
      <Container>
        <Carousel>
          {this.props.movies.map((movie, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={movie.image_url}
              />
              <Carousel.Caption>
                <h3>{movie.title}</h3>
                <h3>{movie.released_on}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    );
  }
}

export default Movie;
