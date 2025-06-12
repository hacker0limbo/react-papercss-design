import clsx from 'clsx';
import React from 'react';

export type CardImgProps = {
  /**
   * 组件渲染的元素
   * @default 'img'
   */
  as?: React.ElementType;
  /**
   * 图片放在 card 的位置
   */
  placement?: 'top' | 'bottom';
} & React.ComponentPropsWithoutRef<'img'>;

/**
 * CardImg 组件
 * @reference https://github.com/react-bootstrap/react-bootstrap/blob/master/src/CardImg.tsx
 */
export const CardImg = React.forwardRef<HTMLImageElement, CardImgProps>(
  ({ as: Component = 'img', children, placement, className, ...restProps }, ref) => {
    return (
      <Component
        ref={ref}
        className={clsx({ [`image-${placement}`]: placement }, className)}
        {...restProps}
      >
        {children}
      </Component>
    );
  },
);

CardImg.displayName = 'CardImg';
