import { uniqueId } from 'lodash-es';
import React, { useMemo } from 'react';
import { useTabsContext } from './TabsContext';

export type TabContentProps = {
  /**
   * tabItem 的内容
   */
  children?: React.ReactNode;
  /**
   * tabItem 的唯一标识 key
   */
  tabKey?: React.Key;
  /**
   * 销毁折叠隐藏的面板
   */
  destroyOnHidden?: boolean;
};

export const TabContent = ({ children, tabKey, destroyOnHidden }: TabContentProps) => {
  const { activeKey } = useTabsContext();
  const checked = useMemo(() => activeKey === tabKey, [activeKey, tabKey]);
  const tabContentId = uniqueId('tabContent-');

  if (!checked && destroyOnHidden) {
    return null;
  }

  return (
    <div
      id={tabContentId}
      className="content"
      // 这里手动根据状态来进行展示 content, 原始的 papercss 是写死 .tabs input[id$=tab1]:checked ~ div[id$=content1] 的
      style={{ display: checked ? 'block' : 'none' }}
    >
      {children}
    </div>
  );
};

TabContent.displayName = 'TabContent';
