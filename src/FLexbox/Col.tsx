import clsx from 'clsx';
import React from 'react';

export type ColProps = {
  span?: number;
  fill?: boolean;
  align?: 'top' | 'middle' | 'bottom';
  sm?: number;
  md?: number;
  lg?: number;
} & React.ComponentPropsWithoutRef<'div'>;

/**
 * Col Component
 */
export const Col = React.forwardRef<HTMLDivElement, ColProps>(
  ({ span, fill, align, sm, md, lg, children, ...restProps }, ref) => {
    return (
      <div
        className={clsx(
          'col',
          span && `col-${span}`,
          fill && 'col-fill',
          align && `align-${align}`,
          sm && `sm-${sm}`,
          md && `md-${md}`,
          lg && `lg-${lg}`,
        )}
        ref={ref}
        {...restProps}
      >
        {children}
      </div>
    );
  },
);

Col.displayName = 'Col';
