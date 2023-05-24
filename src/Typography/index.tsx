import {
  Typography,
  TypographyCodeProps,
  TypographyLinkProps,
  TypographyTextProps,
  TypographyTitleProps,
} from './Typography';

const Text = (props: TypographyTextProps) => <Typography renderType="text" {...props} />;
const Paragraph = (props: TypographyTextProps) => <Typography renderType="paragraph" {...props} />;
const Title = (props: TypographyTitleProps) => <Typography renderType="title" {...props} />;
const Link = (props: TypographyLinkProps) => <Typography renderType="link" {...props} />;
const Code = (props: TypographyCodeProps) => <Typography renderType="code" {...props} />;
const CodeBlock = (props: TypographyCodeProps) => <Typography renderType="snippet" {...props} />;
const KBD = (props: TypographyCodeProps) => <Typography renderType="kbd" {...props} />;

const CombinedTypography = Object.assign(Typography, {
  Text,
  Paragraph,
  Title,
  Link,
  Code,
  CodeBlock,
  KBD,
});

export { CombinedTypography as Typography };
export type { TypographyTextProps, TypographyTitleProps, TypographyLinkProps, TypographyCodeProps };
