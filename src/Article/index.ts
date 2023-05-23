import {
  Article,
  ArticleMeta,
  ArticleMetaProps,
  ArticleProps,
  ArticleTextLead,
  ArticleTextLeadProps,
  ArticleTitle,
  ArticleTitleProps,
} from './Article';

const CombinedArticle = Object.assign(Article, {
  Title: ArticleTitle,
  Meta: ArticleMeta,
  TextLead: ArticleTextLead,
});

export { CombinedArticle as Article };
export type { ArticleProps, ArticleTitleProps, ArticleMetaProps, ArticleTextLeadProps };
