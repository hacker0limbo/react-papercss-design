import { Breadcrumb, BreadcrumbProps } from './Breadcrumb';
import { BreadcrumbItem, BreadcrumbItemProps } from './BreadcrumbItem';

const CombinedBreadcrumb = Object.assign(Breadcrumb, {
  Item: BreadcrumbItem,
});

export { CombinedBreadcrumb as Breadcrumb };
export type { BreadcrumbProps, BreadcrumbItemProps };
