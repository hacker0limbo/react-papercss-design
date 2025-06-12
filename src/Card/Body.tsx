import clsx from 'clsx';
import React from 'react';

export type CardBodyProps = {
  /**
   * 组件渲染的元素
   * @default 'div'
   */
  as?: React.ElementType;
} & React.ComponentPropsWithoutRef<'div'>;

/**
 * CardBody 组件
 * @reference https://github.com/react-bootstrap/react-bootstrap/blob/master/src/CardBody.tsx
 */
export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ as: Component = 'div', children, className, ...restProps }, ref) => {
    return (
      <Component ref={ref} className={clsx('card-body', className)} {...restProps}>
        {children}
      </Component>
    );
  },
);

CardBody.displayName = 'CardBody';
