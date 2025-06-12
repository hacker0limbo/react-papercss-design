import React from 'react';
import { Article, Button, Row } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Article
      title="Article Title"
      meta="Written by Super User on 24 November 2017. Posted in Blog"
      textLead="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur repellendus excepturi,
        consequatur illo rerum, non sint asperiores dolore sapiente, vitae blanditiis. Officiis at
        quaerat modi earum, fugiat magni impedit, aperiam."
      footer={
        <Row>
          <Button>Read More</Button>
          <Button>5 Comments</Button>
        </Row>
      }
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iure totam nam debitis
        aliquid impedit, et quas omnis aspernatur optio molestias ex laborum quia. Ducimus culpa
        tempore, veritatis officia delectus dolore dignissimos reprehenderit vero, sunt odit placeat
        est non molestiae ipsa nam velit in iusto hic quasi similique facere. Maxime?
      </p>
    </Article>
  );
};

export default App;
