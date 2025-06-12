import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { createUseStyles } from 'react-jss';
import { Variant } from '../types';

export type ProgressProps = {
  /**
   * 进度条类型, 默认为空
   */
  type?: Variant | 'muted';
  /**
   * 进度条百分比
   */
  percent?: number;
  /**
   * 是否显示进度数值
   */
  showInfo?: boolean;
  /**
   * 内容的模板函数
   * @default (percent) => `${percent}%`
   */
  format?: (percent: number) => string;
  /**
   * 是否展示波纹类型
   */
  striped?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;

type SpaceRuleNames = 'progressBar' | 'progress' | 'progressInfo';

const useStyles = createUseStyles<SpaceRuleNames, ProgressProps>({
  // 原始的 papercss 使用的是 w-{percent} 通过改变 width 来实现进度条的变化
  // 这里保持和大多数组件库一样使用 transform 来实现, 同时 papercss 已经实现了动画, 即 all 235ms ease-in-out 0s;
  progress: {
    width: '100%',
  },
  progressBar: {
    // 这么写是为了让 css 类名的权重更高, 否则不起作用, papercss 默认给 bar 的 with 是 0
    '.progress &.bar': {
      width: '100%',
      transform: ({ percent = 0 }) => `translateX(-${100 - percent}%)`,
      position: 'relative',
    },
  },
  progressInfo: {
    // 使用绝对定位来实现进度条的数值显示在 bar 的中间
    position: 'absolute',
    top: '50%',
    left: ({ percent = 0 }) => `${100 - percent / 2}%`,
    transform: 'translate(-50%, -50%)',
    // 禁止子元素响应鼠标事件
    pointerEvents: 'none',
  },
});

/**
 * 进度条组件
 * @reference https://www.radix-ui.com/primitives/docs/components/progress
 */
export const Progress = forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {
  const {
    className,
    percent = 0,
    showInfo = false,
    striped = false,
    type,
    format = (percent: number) => `${percent}%`,
    ...restProps
  } = props;
  const classes = useStyles(props);

  return (
    <div ref={ref} className={clsx('progress', className)} {...restProps}>
      <div className={clsx(`bar`, classes.progressBar, type, { striped })}>
        <div className={classes.progressInfo}>{showInfo ? format(percent) : null}</div>
      </div>
    </div>
  );
});

Progress.displayName = 'Progress';
