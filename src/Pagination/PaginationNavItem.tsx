import React from 'react';
import { Button, ButtonProps } from '../Button';
import { Arrow } from './Arrow';

export type PaginationNavItemProps = {
  label?: React.ReactNode;
  action?: 'prev' | 'next';
} & ButtonProps;

export const PaginationNavItem = React.forwardRef<HTMLButtonElement, PaginationNavItemProps>(
  ({ label, size, action, ...restProps }, ref) => {
    return (
      <Button ref={ref} size={size} {...restProps}>
        {label ? label : <Arrow action={action} size={size} />}
      </Button>
    );
  },
);
