import clsx from 'clsx';
import React from 'react';

export type CardTextProps = {
  /**
   * 组件渲染的元素
   * @default 'p'
   */
  as?: React.ElementType;
} & React.ComponentPropsWithoutRef<'p'>;

/**
 * CardText 组件
 * @reference https://github.com/react-bootstrap/react-bootstrap/blob/master/src/CardText.tsx
 */
export const CardText = React.forwardRef<HTMLParagraphElement, CardTextProps>(
  ({ as: Component = 'p', children, className, ...restProps }, ref) => {
    return (
      <Component ref={ref} className={clsx('card-text', className)} {...restProps}>
        {children}
      </Component>
    );
  },
);

CardText.displayName = 'CardText';
