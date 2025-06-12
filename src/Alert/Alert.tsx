import clsx from 'clsx';
import { isEmpty, uniqueId } from 'lodash-es';
import React, { forwardRef, useState } from 'react';
import { Variant } from '../types';

export type AlertProps = {
  /**
   * 组件样式
   * @default primary
   */
  type?: Variant;
  /**
   * 关闭按钮点击时触发
   */
  onClose?: (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
  /**
   * 关闭动画结束后触发
   */
  afterClose?: () => void;
  /**
   * 是否可关闭
   * @default false
   */
  dismissible?: boolean;
  /**
   * 关闭按钮的文本
   * @default X
   */
  closeLabel?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'div'>;

// 默认会需要 transition 的属性, 理论来说 transition 这些属性都会触发动画调用 onTransitionEnd 方法
const defaultTransitionedPropertyNames = ['max-height', 'opacity', 'padding-bottom', 'padding-top'];

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    type = 'primary',
    onClose,
    afterClose,
    dismissible = false,
    closeLabel = 'X',
    children,
    style,
    className,
    ...restProps
  } = props;
  const [visible, setVisible] = useState<boolean>(true);
  const id = uniqueId('alert-');
  // 所有在 dismissible 的情况下, 需要 transition 的属性
  const transitionedPropertyNames = React.useRef<string[]>(defaultTransitionedPropertyNames);

  const handleClose = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    onClose?.(e);
  };

  if (!visible) {
    // papercss 正常还是会渲染元素, 只是通过 opacity 和 max-height 等属性来隐藏了, 但是这里为了和其他市面上的组件库保持一致性还是不再渲染 dom
    return null;
  }

  return (
    <>
      {dismissible && <input className="alert-state" id={id} type="checkbox" />}
      <div
        ref={ref}
        style={{ width: 'auto', ...style }}
        onTransitionEnd={(e) => {
          if ((e.target as HTMLDivElement).matches('.alert.dismissible')) {
            // 判断是哪个属性触发了 transition, 从属性列表里移除
            transitionedPropertyNames.current = transitionedPropertyNames.current.filter(
              (name) => e.propertyName !== name,
            );
            if (isEmpty(transitionedPropertyNames.current)) {
              setVisible(false);
              afterClose?.();
              transitionedPropertyNames.current = defaultTransitionedPropertyNames;
            }
          }
        }}
        className={clsx('alert', `alert-${type}`, { dismissible }, className)}
        {...restProps}
      >
        {children}
        {dismissible ? (
          <label htmlFor={id} className="btn-close" onClick={handleClose}>
            {closeLabel}
          </label>
        ) : null}
      </div>
    </>
  );
});

Alert.displayName = 'Alert';
