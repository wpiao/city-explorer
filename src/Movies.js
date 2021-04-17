import React from 'react';
import { Container, CardColumns } from 'react-bootstrap';
import Movie from './Movie.js';

class Movies extends React.Component {
  render() {
    return (
      <Container>
        <CardColumns>
          {this.props.movies.map((movie, i) => (
            <Movie
              key={i}
              url={movie.image_url}
              title={movie.title}
              release={movie.released_on}
            />
          ))}
        </CardColumns>
      </Container>
    );
  }
}

export default Movies;
