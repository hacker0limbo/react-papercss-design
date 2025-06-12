import clsx from 'clsx';
import React, { forwardRef, useMemo } from 'react';
import { Variant } from '../types';

export type TypographyBaseProps = {
  /**
   * Title 组件的类型, 1-6 代表 h1-h6
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * 底层用于渲染的元素类型
   */
  renderType: 'title' | 'text' | 'paragraph' | 'link' | 'code' | 'codeBlock' | 'kbd';
  /**
   * 文字颜色
   */
  textType?: Variant | 'muted';
  /**
   * 背景颜色
   */
  backgroundType?: Variant | 'muted';
} & React.HTMLAttributes<HTMLElement>;

// text
export type TypographyTextProps = Omit<TypographyBaseProps, 'level' | 'renderType'> &
  React.ComponentPropsWithoutRef<'span'>;

// paragraph
export type TypographyParagraphProps = Omit<TypographyBaseProps, 'level' | 'renderType'> &
  React.ComponentPropsWithoutRef<'p'>;

// code
export type TypographyCodeProps = Omit<
  TypographyBaseProps,
  'level' | 'renderType' | 'textType' | 'backgroundType'
>;

// codeBlock
export type TypographyCodeBlockProps = Omit<
  TypographyBaseProps,
  'level' | 'level' | 'renderType' | 'textType' | 'backgroundType'
> &
  React.ComponentPropsWithoutRef<'pre'>;

// kbd
export type TypographyKBDProps = Omit<
  TypographyBaseProps,
  'level' | 'renderType' | 'textType' | 'backgroundType'
> &
  React.ComponentPropsWithoutRef<'kbd'>;

// title
export type TypographyTitleProps = Omit<TypographyBaseProps, 'renderType'> &
  React.ComponentPropsWithoutRef<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;

// link
export type TypographyLinkProps = Omit<TypographyBaseProps, 'level' | 'renderType'> &
  React.ComponentPropsWithoutRef<'a'>;

/**
 * Typography 组件
 * @reference https://github.com/3lang3/react-vant/blob/main/packages/react-vant/src/components/typography/Typography.tsx
 */
export const Typography = forwardRef<HTMLElement, TypographyBaseProps>((props, ref) => {
  const {
    className,
    children,
    renderType = 'span',
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
      case 'codeBlock':
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
      ref={ref}
      className={clsx(className, {
        [`text-${textType}`]: textType,
        [`background-${backgroundType}`]: backgroundType,
      })}
      {...restProps}
    >
      {/* 这里如果是 codeBlock 的话里面还要再包一层 <code> 使得 dom 结构为 <pre><code>children</code></pre> */}
      {renderType === 'codeBlock' ? <code>{children}</code> : children}
    </TagElement>
  );
});
