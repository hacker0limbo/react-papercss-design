import { useControllableValue } from 'ahooks';
import clsx from 'clsx';
import { omit, uniqueId } from 'lodash-es';
import React, { useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { CollapseContent } from './CollapseContent';
import { CollapseContext } from './CollapseContext';
import { CollapseHeader } from './CollapseHeader';
import { CollapsePane, CollapsePaneItemProps, CollapsePaneProps } from './CollapsePane';

export type CollapseProps = {
  /**
   * 是否是手风琴模式, 即默认只允许展开一个
   * @default false
   */
  accordion?: boolean;
  /**
   * 当前的选中的 collapseItem, 受控属性
   */
  activeKey?: string | string[];
  /**
   * 默认选中的 collapseItem, 非受控属性
   */
  defaultActiveKey?: string | string[];
  /**
   * 销毁折叠隐藏的面板
   * @default false
   */
  destroyOnHidden?: boolean;
  /**
   * 可配置化的 collapseItem 写法
   */
  items?: CollapsePaneItemProps[];
  /**
   * 当 collapseItem 发生变化时的回调
   * @param activeKey 当前选中的 collapseItem 的 key
   */
  onCollapseChange?: (activeKey: string | string[]) => void;
} & React.ComponentPropsWithoutRef<'div'>;

type CollapseRuleNames = 'collapseItem';

const useStyles = createUseStyles<CollapseRuleNames>({
  collapseItem: {
    width: '100%',
  },
});

/**
 * Collapse component
 */
export const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>((props, ref) => {
  const {
    accordion = false,
    items,
    children,
    className,
    destroyOnHidden = false,
    ...restProps
  } = omit(props, ['activeKey', 'defaultActiveKey', 'onCollapseChange', 'onCollapseChange']);
  const classes = useStyles();

  const childList = React.Children.toArray(children).filter(
    (c): c is React.ReactElement<CollapsePaneProps, typeof CollapsePane> =>
      React.isValidElement(c) && c.type === CollapsePane,
  );
  const [_activeKey, _setActiveKey] = useControllableValue<React.Key | React.Key[] | undefined>(
    props,
    {
      defaultValue: accordion ? undefined : [],
      defaultValuePropName: 'defaultActiveKey',
      valuePropName: 'activeKey',
      trigger: 'onCollapseChange',
    },
  );

  // 是否配置了 items 来决定使用 items 还是 children
  const collapseItems = useMemo(
    () => (items ? items : childList.map((child) => child.props)),
    [items, childList],
  );

  const id = uniqueId('collapsible-');

  return (
    <CollapseContext.Provider value={{ activeKey: _activeKey, setActiveKey: _setActiveKey }}>
      <div ref={ref} className={clsx('row', className)} {...restProps}>
        {collapseItems.map((item, index) => (
          <div className={clsx('collapsible', classes.collapseItem, className)} key={index}>
            <CollapseHeader id={id} collapseKey={item.collapseKey} accordion={accordion}>
              {item.header}
            </CollapseHeader>
            <CollapseContent
              key={index}
              collapseKey={item.collapseKey}
              destroyOnHidden={destroyOnHidden}
            >
              {item.children}
            </CollapseContent>
          </div>
        ))}
      </div>
    </CollapseContext.Provider>
  );
});

Collapse.displayName = 'Collapse';
