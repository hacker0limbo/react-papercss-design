import { createContext, useContext } from 'react';

export type TabsContextType = {
  activeKey: React.Key;
  setActiveKey: React.Dispatch<React.SetStateAction<React.Key>>;
};

export const TabsContext = createContext<TabsContextType | null>(null);

export const useTabsContext = () => {
  const tabsContext = useContext(TabsContext);

  if (tabsContext === null) {
    throw new Error('useTabsContext must be used within a TabsProvider');
  }
  return tabsContext;
};
