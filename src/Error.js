import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

function Error(props) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{props.errorMessage}</p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show The Error</Button>;
}

export default Error;