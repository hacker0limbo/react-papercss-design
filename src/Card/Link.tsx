import clsx from 'clsx';
import React from 'react';

export type CardLinkProps = {
  /**
   * 组件渲染的元素
   * @default 'a'
   */
  as?: React.ElementType;
} & React.ComponentPropsWithoutRef<'a'>;

/**
 * CardLink 组件
 * @reference https://github.com/react-bootstrap/react-bootstrap/blob/master/src/CardLink.tsx
 */
export const CardLink = React.forwardRef<HTMLLinkElement, CardLinkProps>(
  ({ as: Component = 'a', children, className, ...restProps }, ref) => {
    return (
      <Component ref={ref} className={clsx('card-link', className)} {...restProps}>
        {children}
      </Component>
    );
  },
);

CardLink.displayName = 'CardLink';
