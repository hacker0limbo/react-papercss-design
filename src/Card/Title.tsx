import clsx from 'clsx';
import React from 'react';

export type CardTitleProps = {
  /**
   * 组件渲染的元素
   * @default 'h4'
   */
  as?: React.ElementType;
} & React.ComponentPropsWithoutRef<'h4'>;

/**
 * CardTitle 组件
 * @reference https://github.com/react-bootstrap/react-bootstrap/blob/master/src/CardTitle.tsx
 */
export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ as: Component = 'h4', children, className, ...restProps }, ref) => {
    return (
      <Component ref={ref} className={clsx('card-title', className)} {...restProps}>
        {children}
      </Component>
    );
  },
);

CardTitle.displayName = 'CardTitle';
