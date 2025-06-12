import clsx from 'clsx';
import { omit } from 'lodash-es';
import React, { forwardRef } from 'react';
import { createUseStyles } from 'react-jss';
import { useDefaultProps } from '../hooks';

const formatJustifyContent = (
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch',
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

// 用于样式的 props
export interface SpaceStyleProps {
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
   * 是否自动换行
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
}

export type SpaceProps = SpaceStyleProps & React.ComponentPropsWithoutRef<'div'>;

const defaultSpaceStyleProps: SpaceStyleProps = {
  direction: 'horizontal',
  align: 'center',
  justify: 'start',
  wrap: false,
  block: false,
  gap: 'medium',
};

type SpaceRuleNames = 'space' | 'spaceItem';

const useStyles = createUseStyles<SpaceRuleNames, SpaceProps>({
  space: {
    display: ({ block, direction }) => (block || direction === 'vertical' ? 'flex' : 'inline-flex'),
    gap: ({ gap }) => {
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
    flexDirection: ({ direction }) => (direction === 'horizontal' ? 'row' : 'column'),
    flexWrap: ({ wrap }) => (wrap ? 'wrap' : 'nowrap'),
    justifyContent: ({ justify }) => formatJustifyContent(justify),
    alignItems: ({ align, direction }) =>
      align ? align : direction === 'horizontal' ? 'center' : 'start',
  },
  spaceItem: {
    width: ({ direction }) => (direction === 'horizontal' ? 'auto' : '100%'),
    flex: 'none',
  },
});

/**
 * Space 组件
 * @reference https://github.com/ant-design/ant-design-mobile/blob/master/src/components/space/space.tsx
 */
export const Space = forwardRef<HTMLDivElement, SpaceProps>((props, ref) => {
  // 通过 useDefaultProps 给定默认值, 因为 Space.defaultProps 会在未来 react 版本废弃
  const widthDefaultProps = useDefaultProps(props, defaultSpaceStyleProps);
  const classes = useStyles(widthDefaultProps);

  // 只传入 div 元素的 props
  const { children, className, ...restProps } = omit(
    props,
    Object.keys(defaultSpaceStyleProps) as (keyof SpaceStyleProps)[],
  );

  return (
    <div className={clsx(classes.space, className)} ref={ref} {...restProps}>
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
