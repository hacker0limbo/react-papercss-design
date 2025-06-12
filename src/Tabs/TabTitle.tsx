import { uniqueId } from 'lodash-es';
import React, { useMemo } from 'react';
import { useTabsContext } from './TabsContext';

export type TabTitleProps = {
  /**
   * 用于区分每一个 Tabs 组件的唯一 id, 防止下面的 radio input name 重复造成只能选择一个的问题
   */
  id: string;
  /**
   * tabItem 的唯一标识 key
   */
  tabKey: React.Key;
  /**
   * tabItem 的标题, 对应外部会传进来 item 的 title
   */
  children?: React.ReactNode;
};

export const TabTitle = ({ tabKey, children, id }: TabTitleProps) => {
  const { activeKey, setActiveKey } = useTabsContext();
  const checked = useMemo(() => activeKey === tabKey, [activeKey, tabKey]);

  const tabId = uniqueId('tab-');

  return (
    <>
      <input id={tabId} type="radio" name={id} checked={checked} readOnly />
      <label
        htmlFor={tabId}
        // 把事件监听放在 label 上, 是因为当 radio 的时候, 如果点击已经选中的 tab 是无法触发 onChange 事件的
        // 同时为了避免 react 对受控组件的警告(因为这里用了 checked), 在 input 上添加 readOnly 属性表明状态我自己管理
        onClick={() => {
          setActiveKey(tabKey);
        }}
      >
        {children}
      </label>
    </>
  );
};

TabTitle.displayName = 'TabTitle';
