import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { BaseComponentProps, Variant } from '../types';

export interface BadgeProps extends BaseComponentProps {
  type?: Variant;
  tag?: React.ElementType | string;
  children?: React.ReactNode;
}

export const Badge = forwardRef<HTMLElement, BadgeProps>((props, ref) => {
  const { className, style, children, tag: TagElement = 'span', type } = props;

  return (
    <TagElement ref={ref} className={clsx('badge', type, className)} style={style}>
      {children}
    </TagElement>
  );
});
