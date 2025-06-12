import React from 'react';
import { Button, Card } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>My awesome Paper card!</Card.Title>
        <Card.Subtitle>Nice looking subtitle.</Card.Subtitle>
        <Card.Text>You can also place image on the bottom of the card.</Card.Text>
        <Button>Let me go here!</Button>
      </Card.Body>
      <Card.Img placement="bottom" src="https://unsplash.it/550/250" alt="Card example image" />
    </Card>
  );
};

export default App;
