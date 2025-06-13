import { useControllableValue } from 'ahooks';
import clsx from 'clsx';
import { omit, uniqueId } from 'lodash-es';
import React, { useMemo } from 'react';
import { TabContent } from './TabContent';
import { TabPane, TabPaneItemProps, TabPaneProps } from './TabPane';
import { TabsContext } from './TabsContext';
import { TabTitle } from './TabTitle';

export type TabsProps = {
  /**
   * 当前选中的 tab 的 key
   */
  activeKey?: React.Key;
  /**
   * 非受控模式下的默认选中的 tab 的 key
   */
  defaultActiveKey?: React.Key;
  /**
   * 使用配置项来渲染 tab
   */
  items?: TabPaneItemProps[];
  /**
   * 销毁折叠隐藏的 tabItem
   * @default false
   */
  destroyOnHidden?: boolean;
  /**
   * 当前选中的 tab 的 key 发生变化时的回调函数
   * @param activeKey 当前选中的 tab 的 key
   */
  onTabChange?: (activeKey: React.Key) => void;
} & React.ComponentPropsWithoutRef<'div'>;

/**
 * Tabs 组件
 * NOTE: 这里需要注意实现上和 papercss 有一些不同. papercss 是通过:
 * 1. .tabs input:checked + label { ... } 来实现选中的 label 样式的. 这里基本保持一致, 选中状态通过 context 管理然后对应到 checked 属性上
 *  1.1 但是注意由于 papercss 写法是写死了 input 的 id 为 tabs{1~5}. 导致如果存在多个 tabs 组件时会出现样式选中混乱. 这里把 id 修改为 tabs-{1~MAX}. 不会影响选中样式
 * 2. 接上面. 由于 id 改了, 导致原始的 content 的展示逻辑也需要调整. 原始 papercss 的展示逻辑为通过写死 .tabs input[id$=tab1]:checked ~ div[id$=content1] { ... } 来进行匹配然后 display: block
 *  2.1 这里手动通过状态来匹配是否选中. 然后进行 display: block 展示.
 * 3. 需要注意的是, radio input 的 name 属性需要根据每一个 Tabs 组件来进行区分的. 否则永远只会选中一个. 所以这里内部生成一个 id 用于区分
 */
export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    className,
    items,
    children,
    destroyOnHidden = false,
    ...restProps
  } = omit(props, ['activeKey', 'defaultActiveKey', 'onTabChange']);

  const childList = React.Children.toArray(children).filter(
    (c): c is React.ReactElement<TabPaneProps, typeof TabPane> =>
      React.isValidElement(c) && c.type === TabPane,
  );

  const [_activeKey, _setActiveKey] = useControllableValue<React.Key>(props, {
    // 如果没有提供 activeKey, 则使用第一个 tabKey
    defaultValue: (items ? items?.[0]?.tabKey : childList?.[0]?.props.tabKey) ?? '1',
    defaultValuePropName: 'defaultActiveKey',
    valuePropName: 'activeKey',
    trigger: 'onTabChange',
  });

  // 根据 items 或 children 来决定使用哪个
  const tabPanItems = useMemo(
    () => (items ? items : childList.map((child) => child.props)),
    [items, childList],
  );

  // 生成一个唯一的用于标识的 id, 为了区分后续在 TabsTitle 里的 input 的 name 属性, 用于分组, 否则多个 Tabs 组件选中样式会存在冲突
  const id = uniqueId('tabs-');

  return (
    <TabsContext.Provider value={{ activeKey: _activeKey, setActiveKey: _setActiveKey }}>
      <div className={clsx('row flex-spaces tabs', className)} ref={ref} {...restProps}>
        {tabPanItems.map((item, i) => (
          <TabTitle key={i} tabKey={item.tabKey ?? i.toString()} id={id}>
            {item.title}
          </TabTitle>
        ))}
        {tabPanItems.map((item, i) => (
          <TabContent
            key={i}
            tabKey={item.tabKey ?? i.toString()}
            destroyOnHidden={destroyOnHidden}
          >
            {item.children}
          </TabContent>
        ))}
      </div>
    </TabsContext.Provider>
  );
});

Tabs.displayName = 'Tabs';
