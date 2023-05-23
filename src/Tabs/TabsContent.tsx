import React from 'react';
import { useTabsContext } from './TabsContext';

export type TabsContentProps = {
  tabKey?: React.Key;
  forceRender?: boolean;
  children?: React.ReactNode;
};

export const TabsContent = ({ children, forceRender = false, tabKey }: TabsContentProps) => {
  const { activeKey } = useTabsContext();

  return forceRender || activeKey === tabKey ? (
    <div className="content" style={{ display: 'block' }}>
      {children}
    </div>
  ) : null;
};
