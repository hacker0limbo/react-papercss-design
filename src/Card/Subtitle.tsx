import clsx from 'clsx';
import React from 'react';

export type CardSubtitleProps = {
  /**
   * 组件渲染的元素
   * @default 'h5'
   */
  as?: React.ElementType;
} & React.ComponentPropsWithoutRef<'h5'>;

/**
 * CardSubtitle 组件
 * @reference https://github.com/react-bootstrap/react-bootstrap/blob/master/src/CardSubtitle.tsx
 */
export const CardSubtitle = React.forwardRef<HTMLHeadingElement, CardSubtitleProps>(
  ({ as: Component = 'h5', children, className, ...restProps }, ref) => {
    return (
      <Component ref={ref} className={clsx('card-subtitle', className)} {...restProps}>
        {children}
      </Component>
    );
  },
);

CardSubtitle.displayName = 'CardSubtitle';
