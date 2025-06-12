import { Code } from './Code';
import { CodeBlock } from './CodeBlock';
import { KBD } from './KBD';
import { Link } from './Link';
import { Paragraph } from './Paragraph';
import { Text } from './Text';
import { Title } from './Title';
import {
  Typography,
  TypographyCodeBlockProps,
  TypographyCodeProps,
  TypographyKBDProps,
  TypographyLinkProps,
  TypographyParagraphProps,
  TypographyTextProps,
  TypographyTitleProps,
} from './Typography';

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
export type {
  TypographyCodeBlockProps,
  TypographyCodeProps,
  TypographyKBDProps,
  TypographyLinkProps,
  TypographyParagraphProps,
  TypographyTextProps,
  TypographyTitleProps,
};
