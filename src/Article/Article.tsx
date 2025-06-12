import clsx from 'clsx';
import React, { forwardRef } from 'react';

/**
 * Article 组件
 */
export type ArticleProps = {
  title?: React.ReactNode;
  meta?: React.ReactNode;
  textLead?: React.ReactNode;
  footer?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'article'>;

export const Article = forwardRef<HTMLElement, ArticleProps>((props, ref) => {
  const { title, meta, textLead, footer, className, children, ...restProps } = props;
  return (
    <article className={clsx(className, 'article')} ref={ref} {...restProps}>
      <h1 className="article-title">{title}</h1>
      <p className="article-meta">{meta}</p>
      <p className="text-lead">{textLead} </p>
      {children}
      {footer}
    </article>
  );
});
Article.displayName = 'Article';
