import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { createUseStyles } from 'react-jss';
import { Variant } from '../types';

export type BadgeProps = {
  /**
   * 样式类型
   */
  type?: Variant;
  /**
   * 是否显示关闭按钮
   * @default false
   */
  closable?: boolean;
  /**
   * 点击关闭按钮的回调函数
   */
  onClose?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  /**
   * 关闭按钮的文本
   * @default X
   */
  closeLabel?: React.ReactNode;
  /**
   * 徽标是否被禁用
   * @default false
   */
  disabled?: boolean;
} & React.ComponentPropsWithoutRef<'span'>;

type BadgeRuleNames = 'closeLabel' | 'disabled';

const useStyles = createUseStyles<BadgeRuleNames, BadgeProps>({
  closeLabel: {
    cursor: 'pointer',
    marginLeft: '0.5rem',
  },
  disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

/**
 * Badge 组件 / 别的组件库叫 Tag
 * @reference https://github.com/Tencent/tdesign-react/blob/develop/packages/components/tag/Tag.tsx
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const {
    className,
    children,
    type,
    closable = false,
    closeLabel = 'X',
    onClose,
    disabled = false,
    ...restProps
  } = props;
  const classes = useStyles(props);

  return (
    <span
      ref={ref}
      className={clsx('badge', type, { [classes.disabled]: disabled }, className)}
      {...restProps}
    >
      {children}
      {closable && !disabled ? (
        <small
          className={classes.closeLabel}
          onClick={(e) => {
            if (disabled) {
              return;
            }
            onClose?.(e);
          }}
        >
          {closeLabel}
        </small>
      ) : null}
    </span>
  );
});

Badge.displayName = 'Badge';
