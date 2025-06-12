import React from 'react';
import { Typography } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <>
      <Typography.Title>About PaperCSS</Typography.Title>
      <Typography.Paragraph>
        PaperCSS was originally made by
        <Typography.Link href="https://github.com/rhyneav">@rhyneav</Typography.Link> to be
        something different than the typical mODerN STylEs and clean pages found in every other CSS
        framework. It was built with LESS and deployed on a single index.html page before being open
        sourced. It has since evolved; The CSS source has been rewritten in SCSS and the
        documentation is now built with Hugo (all thanks to some wonderful
        <Typography.Link href="https://github.com/papercss/papercss/graphs/contributors">
          contributors
        </Typography.Link>
        ). In addition to the original creator, it is maintained by
        <Typography.Link href="https://github.com/Fraham">@Fraham</Typography.Link> and
        <Typography.Link href="https://github.com/TotomInc">@TotomInc</Typography.Link>.
      </Typography.Paragraph>

      <Typography.Paragraph>
        The goal of PaperCSS is to be as minimal as possible when adding classes. For example, a
        button should just look like a paper button. There shouldn’t be a need to add a class such
        as <Typography.Code>paper-button</Typography.Code>. Because of this, adding PaperCSS to a
        markdown generated page should instantly paper-ize it.
      </Typography.Paragraph>

      <Typography.Paragraph>
        Feel free to use it for wireframes, webapps, blogs, or whatever else you can think of! It is
        licensed under the
        <Typography.Link href="https://github.com/papercss/papercss/blob/master/LICENSE.md">
          ISC License
        </Typography.Link>
        , so use it wherever you want to.
      </Typography.Paragraph>

      <Typography.Paragraph>
        If you are new to Git or SCSS, this would be a great project to get your feet wet with. I’d
        be happy to help walk you through the pull request process. Check out the Git repo for more
        info!
      </Typography.Paragraph>

      <Typography.CodeBlock>{'console.log("Hello PaperCSS !")'}</Typography.CodeBlock>

      <Typography.Paragraph>
        Press <Typography.KBD>ESC</Typography.KBD> to Exit...
      </Typography.Paragraph>
    </>
  );
};

export default App;
