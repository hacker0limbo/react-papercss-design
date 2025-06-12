import React from 'react';
import { Button, Card } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img src="https://picsum.photos/768" alt="Card example image" />
      <Card.Body>
        <Card.Title>My awesome Paper card!</Card.Title>
        <Card.Subtitle>Nice looking subtitle.</Card.Subtitle>
        <Card.Text>
          Notice that the card width in this example have been set to 20rem, otherwise it will try
          to fill the current container/row where the card is.
        </Card.Text>
        <Button>Let me go here!</Button>
      </Card.Body>
    </Card>
  );
};

export default App;
