import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  handleClick = () => {
    this.props.handleSearch(this.textInput.current.value);
    this.textInput.current.value = '';

  }

  render() {
    return (
      <div>
        <InputGroup className="mb-3">
          <FormControl
            ref={this.textInput}
            placeholder="Enter city name"
            aria-label="Enter city name"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button onClick={this.handleClick} variant="outline-secondary">Explore!</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}

export default Search;
