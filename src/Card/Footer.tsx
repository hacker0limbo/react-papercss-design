import clsx from 'clsx';
import React from 'react';

export type CardFooterProps = {
  /**
   * 组件渲染的元素
   * @default 'div'
   */
  as?: React.ElementType;
} & React.ComponentPropsWithoutRef<'div'>;

/**
 * CardFooter 组件
 * @reference https://github.com/react-bootstrap/react-bootstrap/blob/master/src/CardFooter.tsx
 */
export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ as: Component = 'div', children, className, ...restProps }, ref) => {
    return (
      <Component ref={ref} className={clsx('card-footer', className)} {...restProps}>
        {children}
      </Component>
    );
  },
);

CardFooter.displayName = 'CardFooter';
