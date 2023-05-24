import clsx from 'clsx';
import React, { forwardRef, useMemo } from 'react';
import { BaseComponentProps, Variant } from '../types';

export interface TypographyBaseProps extends BaseComponentProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  renderType?: 'title' | 'text' | 'paragraph' | 'link' | 'code' | 'snippet' | 'kbd';
  textType?: Variant | 'muted';
  backgroundType?: Variant | 'muted';
  children?: React.ReactNode;
}

// text, paragraph
export type TypographyTextProps = Omit<TypographyBaseProps, 'level' | 'renderType'>;
// code, snippet, kbd
export type TypographyCodeProps = Omit<
  TypographyBaseProps,
  'level' | 'renderType' | 'textType' | 'backgroundType'
>;
// title
export type TypographyTitleProps = Omit<TypographyBaseProps, 'renderType'>;
// link
export type TypographyLinkProps = Omit<TypographyBaseProps, 'level' | 'renderType'> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Typography = forwardRef<HTMLElement, TypographyBaseProps>((props, ref) => {
  const {
    className,
    style,
    children,
    renderType,
    level = 1,
    textType,
    backgroundType,
    ...restProps
  } = props;
  const TagElement = useMemo<React.ElementType>(() => {
    switch (renderType) {
      case 'text':
        return 'span';
      case 'paragraph':
        return 'p';
      case 'code':
        return 'code';
      case 'snippet':
        return 'pre';
      case 'kbd':
        return 'kbd';
      case 'link':
        return 'a';
      case 'title':
        switch (level) {
          case 1:
            return 'h1';
          case 2:
            return 'h2';
          case 3:
            return 'h3';
          case 4:
            return 'h4';
          case 5:
            return 'h5';
          case 6:
            return 'h6';
        }
      default:
        return 'span';
    }
  }, [level, renderType]);

  return (
    <TagElement
      {...restProps}
      ref={ref}
      style={style}
      className={clsx(className, {
        [`text-${textType}`]: textType,
        [`background-${backgroundType}`]: backgroundType,
      })}
    >
      {children}
    </TagElement>
  );
});
