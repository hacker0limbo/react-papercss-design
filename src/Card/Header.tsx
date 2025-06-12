import clsx from 'clsx';
import React from 'react';

export type CardHeaderProps = {
  /**
   * 组件渲染的元素
   * @default 'div'
   */
  as?: React.ElementType;
} & React.ComponentPropsWithoutRef<'div'>;

/**
 * CardHeader 组件
 * @reference https://github.com/react-bootstrap/react-bootstrap/blob/master/src/CardHeader.tsx
 */
export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ as: Component = 'div', children, className, ...restProps }, ref) => {
    return (
      <Component ref={ref} className={clsx('card-header', className)} {...restProps}>
        {children}
      </Component>
    );
  },
);

CardHeader.displayName = 'CardHeader';
