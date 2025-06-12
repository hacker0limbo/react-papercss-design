import { forwardRef } from 'react';

export type BreadcrumbItemProps = {
  /**
   * 同 children 但是主要用于配置项书写
   */
  content?: React.ReactNode;
  active?: boolean;
  href?: string;
  target?: string;
  children?: React.ReactNode;
  title?: string;
} & React.ComponentPropsWithoutRef<'li'>;

export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>((props, ref) => {
  const { children, content, href, active = false, target, title, ...restProps } = props;

  return (
    <li ref={ref} {...restProps}>
      {active ? (
        children
      ) : (
        <a href={href} target={target} title={title}>
          {children ?? content}
        </a>
      )}
    </li>
  );
});
