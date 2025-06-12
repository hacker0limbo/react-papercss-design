import React from 'react';
import { Button, Card } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>My awesome Paper card!</Card.Title>
        <Card.Subtitle>Nice looking subtitle.</Card.Subtitle>
        <Card.Subtitle>You can also place image on the bottom of the card.</Card.Subtitle>
        <Button>Let me go here!</Button>
      </Card.Body>
      <Card.Footer>Footer</Card.Footer>
    </Card>
  );
};

export default App;
