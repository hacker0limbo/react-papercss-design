import { useControllableValue } from 'ahooks';
import clsx from 'clsx';
import React from 'react';
import { BaseComponentProps } from '../types';
import { TabPane, TabPaneProps } from './TabPane';
import { TabsContent } from './TabsContent';
import { TabsContext } from './TabsContext';
import { TabsTitle } from './TabsTitle';

export type TabItem = Omit<TabPaneProps, 'style' | 'className'>;

export interface TabsProps extends BaseComponentProps {
  activeKey?: React.Key;
  defaultActiveKey?: React.Key;
  items?: TabItem[];
  onChange?: (activeKey: React.Key) => void;
  children?: React.ReactNode;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const { className, style, items, onChange, children } = props;
  const childList = React.Children.toArray(children).filter(
    (c) => React.isValidElement(c) && c.type === TabPane,
  ) as unknown as React.ReactElement<TabPaneProps>[];
  const [_activeKey, _setActiveKey] = useControllableValue<React.Key>(props, {
    defaultValue: (items ? items?.[0]?.tabKey : childList?.[0]?.props.tabKey) ?? '0',
    defaultValuePropName: 'defaultActiveKey',
    valuePropName: 'activeKey',
  });

  return (
    <TabsContext.Provider value={{ activeKey: _activeKey, setActiveKey: _setActiveKey }}>
      <div className={clsx('row flex-spaces tabs', className)} style={style} ref={ref}>
        {items
          ? items.map((item, i) => (
              <TabsTitle
                title={item.title}
                key={i}
                tabKey={item.tabKey ?? i.toString()}
                onChange={onChange}
              />
            ))
          : childList.map((child, i) => (
              <TabsTitle
                title={child.props.title}
                key={i}
                tabKey={child.props.tabKey ?? i.toString()}
                onChange={onChange}
              />
            ))}
        {items
          ? items.map((item, i) => (
              <TabsContent
                key={i}
                forceRender={item.forceRender}
                tabKey={item.tabKey ?? i.toString()}
              >
                {item.children}
              </TabsContent>
            ))
          : childList.map((child, i) => (
              <TabsContent
                key={i}
                forceRender={child.props.forceRender}
                tabKey={child.props.tabKey ?? i.toString()}
              >
                <>{child.props.children}</>
              </TabsContent>
            ))}
      </div>
    </TabsContext.Provider>
  );
});
