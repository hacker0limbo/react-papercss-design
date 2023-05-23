import { ElementType, forwardRef } from 'react';
import { BaseComponentProps } from '../types';

export interface BreadcrumbItemProps extends BaseComponentProps {
  active?: boolean;
  href?: string;
  as?: ElementType;
  linkAs?: ElementType;
  target?: string;
  children?: React.ReactNode;
  title?: React.ReactNode;
}

export const BreadcrumbItem = forwardRef<HTMLElement, BreadcrumbItemProps>((props, ref) => {
  const {
    as: Component = 'li',
    linkAs: LinkComponent = 'a',
    children,
    className,
    style,
    href,
    active = false,
    target,
    title,
  } = props;

  return (
    <Component ref={ref} className={className} style={style}>
      {active ? (
        children
      ) : (
        <LinkComponent href={href} target={target}>
          {children ?? title}
        </LinkComponent>
      )}
    </Component>
  );
});
