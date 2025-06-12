import clsx from 'clsx';
import React, { forwardRef } from 'react';

export type ContainerProps = {
  size?: 'lg' | 'md' | 'sm' | 'xs';
} & React.ComponentPropsWithoutRef<'div'>;

/**
 * Container 组件
 * @reference https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Container.tsx
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size, children, className, ...restProps }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx('paper container', { [`container-${size}`]: size }, className)}
        {...restProps}
      >
        {children}
      </div>
    );
  },
);

Container.displayName = 'Container';
