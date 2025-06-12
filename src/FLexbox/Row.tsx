import clsx from 'clsx';
import React from 'react';

export type RowProps = {
  justify?: 'right' | 'center' | 'edges' | 'spaces';
  align?: 'top' | 'middle' | 'bottom';
} & React.ComponentPropsWithoutRef<'div'>;

/**
 * Row Component
 */
export const Row = React.forwardRef<HTMLDivElement, RowProps>(
  ({ justify, align, children, ...restProps }, ref) => {
    return (
      <div
        className={clsx('row', justify && `flex-${justify}`, align && `flex-${align}`)}
        ref={ref}
        {...restProps}
      >
        {children}
      </div>
    );
  },
);

Row.displayName = 'Row';
