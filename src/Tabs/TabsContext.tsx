import { createContext, useContext } from 'react';

export type TabsContextType = {
  activeKey: React.Key;
  setActiveKey: React.Dispatch<React.SetStateAction<React.Key>>;
};

export const TabsContext = createContext<TabsContextType | null>(null);

export const useTabsContext = () => {
  const tabsContext = useContext(TabsContext);
  console.log('tabsContext', tabsContext);

  if (tabsContext === null) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return tabsContext;
};
