import React from 'react';
import { Container, Space } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Space direction="vertical">
      <Container>Responsive Container!</Container>
      <Container size="lg">Large Container!</Container>
      <Container size="md">Medium Container!</Container>
      <Container size="sm">Small Container!</Container>
      <Container size="xs">Extra Small Container!</Container>
    </Space>
  );
};

export default App;
