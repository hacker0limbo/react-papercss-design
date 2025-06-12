import React from 'react';

export type PopoverProps = {
  /**
   * popover 的位置
   * @default top
   */
  placement?: 'left' | 'right' | 'top' | 'bottom';
  /**
   * popover 的内容
   */
  label: string;
  /**
   * popover 的触发元素
   */
  children: React.ReactElement;
} & React.ComponentPropsWithoutRef<'div'>;

/**
 * Popover 组件
 * 由于 papercss 的 popover 组件是通过在元素上添加属性来实现的, 所以没有使用 headlessUI 来实现
 */
export function Popover({ placement = 'top', label, children }: PopoverProps) {
  return React.cloneElement(children, {
    [`popover-${placement}`]: label,
  });
}
