import clsx from 'clsx';
import React, { forwardRef } from 'react';

export type ImageProps = {
  /**
   * 是否响应式
   * @default true
   */
  responsive?: boolean;
  /**
   * 是否具有边框
   * @default true
   */
  bordered?: boolean;
  /**
   * 是否设置 float 属性
   */
  float?: 'left' | 'right';
} & React.ComponentPropsWithoutRef<'img'>;

/**
 * Image 组件
 * @reference https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Image.tsx
 */
export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ responsive = true, bordered = true, float, ...restProps }, ref) => {
    return (
      <img
        ref={ref}
        className={clsx('image', {
          'no-responsive': !responsive,
          'no-border': !bordered,
          [`float-${float}`]: float,
        })}
        {...restProps}
      />
    );
  },
);

Image.displayName = 'Image';
