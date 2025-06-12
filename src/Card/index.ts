import { CardBody, CardBodyProps } from './Body';
import { Card, CardProps } from './Card';
import { CardFooter, CardFooterProps } from './Footer';
import { CardHeader, CardHeaderProps } from './Header';
import { CardImg, CardImgProps } from './Img';
import { CardLink, CardLinkProps } from './Link';
import { CardSubtitle, CardSubtitleProps } from './Subtitle';
import { CardText, CardTextProps } from './Text';
import { CardTitle, CardTitleProps } from './Title';

export type {
  CardBodyProps,
  CardFooterProps,
  CardHeaderProps,
  CardImgProps,
  CardLinkProps,
  CardProps,
  CardSubtitleProps,
  CardTextProps,
  CardTitleProps,
};

const CombinedCard = Object.assign(Card, {
  Img: CardImg,
  Title: CardTitle,
  Subtitle: CardSubtitle,
  Body: CardBody,
  Link: CardLink,
  Text: CardText,
  Header: CardHeader,
  Footer: CardFooter,
});

export { CombinedCard as Card };
