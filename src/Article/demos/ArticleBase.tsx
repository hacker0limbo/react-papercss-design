/**
 * title: 基本
 * description: 文章基本的排班和布局。
 */
import { Article, Button, Space } from 'react-papercss-design';

export default () => {
  return (
    <Article>
      <Article.Title>Article Title</Article.Title>
      <Article.Meta>Written by Super User on 24 November 2017. Posted in Blog</Article.Meta>
      <Article.TextLead>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur repellendus excepturi,
        consequatur illo rerum, non sint asperiores dolore sapiente, vitae blanditiis. Officiis at
        quaerat modi earum, fugiat magni impedit, aperiam.
      </Article.TextLead>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iure totam nam debitis
        aliquid impedit, et quas omnis aspernatur optio molestias ex laborum quia. Ducimus culpa
        tempore, veritatis officia delectus dolore dignissimos reprehenderit vero, sunt odit placeat
        est non molestiae ipsa nam velit in iusto hic quasi similique facere. Maxime?
      </p>
      <Space>
        <Button>Read More</Button>
        <Button>5 Comments</Button>
      </Space>
    </Article>
  );
};
