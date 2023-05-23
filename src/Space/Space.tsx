import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { createUseStyles } from 'react-jss';
import { BaseComponentProps } from '../types';

const formatJustifyContent = (
  justify: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch',
) => {
  switch (justify) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'center':
      return 'center';
    case 'between':
      return 'space-between';
    case 'around':
      return 'space-around';
    case 'evenly':
      return 'space-evenly';
    case 'stretch':
      return 'stretch';
    default:
      return 'normal';
  }
};

type Gap = 'small' | 'medium' | 'large' | number | string;

export interface SpaceProps extends BaseComponentProps {
  /**
   * 间距方向
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * 交叉轴对齐方式
   */
  align?: 'start' | 'end' | 'center' | 'baseline';
  /**
   * 主轴对齐方式
   */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
  /**
   * 是否自动换行, 仅在 horizontal 下有效
   */
  wrap?: boolean;
  /**
   * 是否渲染为块级元素
   */
  block?: boolean;
  /**
   * 间距大小, 设为数组时则分别设置垂直方向和水平方向的间距大小
   * @default 16px
   */
  gap?: Gap | [Gap, Gap];
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  children?: React.ReactNode;
}

const useStyles = createUseStyles<'space' | 'spaceItem', SpaceProps>({
  space: {
    display: ({ block = false, direction = 'horizontal' }) =>
      block || direction === 'vertical' ? 'flex' : 'inline-flex',
    gap: ({ gap = 'medium' }) => {
      const gapOptions: Record<string, string> = {
        small: '8px',
        medium: '16px',
        large: '24px',
      };
      if (Array.isArray(gap)) {
        return gap.map((g) => (typeof g === 'number' ? `${g}px` : gapOptions[g] || g)).join(' ');
      } else {
        return typeof gap === 'string' ? gapOptions[gap] || gap : `${gap}px`;
      }
    },
    flexDirection: ({ direction = 'horizontal' }) =>
      direction === 'horizontal' ? 'row' : 'column',
    flexWrap: ({ wrap = false }) => (wrap ? 'wrap' : 'nowrap'),
    justifyContent: ({ justify }) => (justify ? formatJustifyContent(justify) : 'normal'),
    alignItems: ({ align, direction = 'horizontal' }) =>
      align ? align : direction === 'horizontal' ? 'center' : 'normal',
  },
  spaceItem: {
    flex: 'none',
  },
});

export const Space = forwardRef<HTMLDivElement, SpaceProps>((props, ref) => {
  const classes = useStyles(props);
  const { onClick, children, className, style } = props;

  return (
    <div
      className={clsx(classes.space, className)}
      style={style}
      ref={ref}
      onClick={(e) => {
        onClick?.(e);
      }}
    >
      {React.Children.map(children, (c) => c)
        ?.filter((c) => c !== null && c !== undefined)
        ?.map((child, index) => {
          return (
            <React.Fragment key={index}>
              <div className={classes.spaceItem}>{child}</div>
            </React.Fragment>
          );
        })}
    </div>
  );
});
