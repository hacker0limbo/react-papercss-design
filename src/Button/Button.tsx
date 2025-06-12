import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import React from 'react';
import { Size, Variant } from '../types';

export type ButtonProps = {
  type?: Variant;
  outline?: boolean;
  size?: Size;
  block?: boolean;
  // see: https://www.radix-ui.com/primitives/docs/guides/composition
  asChild?: boolean;
  // original html button type attribute
  htmlType?: React.ComponentPropsWithoutRef<'button'>['type'];
} & Omit<React.ComponentPropsWithoutRef<'button'>, 'type'>;

/**
 * Button 组件
 * @reference https://ui.shadcn.com/docs/components/button
 * TODO: plan to use asChild prop or as prop to design a polymorphism Button component, however the type system is a little bit tricky to implement.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    type,
    outline = false,
    size,
    block = false,
    disabled,
    asChild = false,
    className,
    children,
    htmlType = 'button',
    ...restProps
  } = props;
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      type={asChild ? undefined : htmlType}
      ref={ref}
      disabled={disabled}
      className={clsx(
        'paper-btn',
        size && `btn-${size}`,
        { 'btn-block': block },
        { disabled },
        outline ? `btn-${type}-outline` : type && `btn-${type}`,
        className,
      )}
      {...restProps}
    >
      {children}
    </Comp>
  );
});

Button.displayName = 'Button';
