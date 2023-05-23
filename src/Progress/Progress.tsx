import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { BaseComponentProps, Variant } from '../types';

export interface ProgressProps extends BaseComponentProps {
  // 样式
  type?: Variant | 'muted';
  // 进度条百分比, 默认为 0
  percent?: number;
  // 内容
  label?: React.ReactNode;
  // 是否有条纹
  striped?: boolean;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {
  const { className, style, percent = 0, label, striped = false, type = 'default' } = props;
  return (
    <div ref={ref} style={style} className={clsx('progress', className)}>
      <div className={clsx(`bar w-${percent}`, type, { striped })}>{label}</div>
    </div>
  );
});
