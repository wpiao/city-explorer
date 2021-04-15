import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

function Error({ cityErrorMessage, weatherErrorMessage, movieErrorMessage }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{cityErrorMessage}</p>
        <p>{weatherErrorMessage}</p>
        <p>{movieErrorMessage}</p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show The Error</Button>;
}

export default Error;
