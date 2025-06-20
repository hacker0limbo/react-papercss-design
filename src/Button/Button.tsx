import clsx from 'clsx';
import React from 'react';
import { DynamicRefForwardingComponent, Size, Variant } from '../types';

export type ButtonProps = {
  type?: Variant;
  outline?: boolean;
  size?: Size;
  block?: boolean;
  as?: React.ElementType;
  // original html button type attribute
  htmlType?: React.ComponentPropsWithoutRef<'button'>['type'];
} & Omit<React.ComponentPropsWithoutRef<'button'>, 'type'>;

/**
 * Button 组件
 * @reference https://ui.shadcn.com/docs/components/button
 */
export const Button: DynamicRefForwardingComponent<'button', ButtonProps> = React.forwardRef(
  (props, ref) => {
    const {
      type,
      outline = false,
      size,
      block = false,
      disabled,
      as: Comp = 'button',
      className,
      children,
      htmlType = 'button',
      ...restProps
    } = props;

    return (
      <Comp
        type={Comp === 'button' ? htmlType : undefined}
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
  },
);

Button.displayName = 'Button';
