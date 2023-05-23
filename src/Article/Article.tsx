import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { BaseComponentProps } from '../types';

export interface ArticleProps extends BaseComponentProps {
  children?: React.ReactNode;
}

export const Article = forwardRef<HTMLElement, ArticleProps>((props, ref) => {
  const { className, style, children } = props;
  return (
    <article className={clsx(className, 'article')} style={style} ref={ref}>
      {children}
    </article>
  );
});

export interface ArticleTitleProps extends BaseComponentProps {
  children?: React.ReactNode;
}

export const ArticleTitle = forwardRef<HTMLParagraphElement, ArticleTitleProps>((props, ref) => {
  const { className, style, children } = props;

  return (
    <p className={clsx(className, 'article-title')} style={style} ref={ref}>
      {children}
    </p>
  );
});

export interface ArticleMetaProps extends BaseComponentProps {
  children?: React.ReactNode;
}

export const ArticleMeta = forwardRef<HTMLParagraphElement, ArticleTitleProps>((props, ref) => {
  const { className, style, children } = props;

  return (
    <p className={clsx(className, 'article-meta')} style={style} ref={ref}>
      {children}
    </p>
  );
});

export interface ArticleTextLeadProps extends BaseComponentProps {
  children?: React.ReactNode;
}

export const ArticleTextLead = forwardRef<HTMLParagraphElement, ArticleTitleProps>((props, ref) => {
  const { className, style, children } = props;

  return (
    <p className={clsx(className, 'text-lead')} style={style} ref={ref}>
      {children}
    </p>
  );
});
