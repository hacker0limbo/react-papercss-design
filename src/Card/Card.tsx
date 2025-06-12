import clsx from 'clsx';
import React from 'react';

export type CardProps = {
  /**
   * 组件渲染的元素
   * @default 'div'
   */
  as?: React.ElementType;
} & React.ComponentPropsWithoutRef<'div'>;

/**
 * Card 组件
 * @reference https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Card.tsx
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ as: Component = 'div', children, className, ...restProps }, ref) => {
    return (
      <Component ref={ref} className={clsx('card', className)} {...restProps}>
        {children}
      </Component>
    );
  },
);

Card.displayName = 'Card';
