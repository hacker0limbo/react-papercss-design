import React from 'react';
import { Card } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>My awesome Paper card!</Card.Title>
        <Card.Subtitle>Nice looking subtitle.</Card.Subtitle>
        <Card.Text>
          This is another example of a card without image. Cards are also meant to be used without
          images, but with text/links/buttons.
        </Card.Text>
        <Card.Link href="#">First link</Card.Link>
        <Card.Link href="#">Second link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default App;
