import { createContext, useContext } from 'react';

export type CollapseContextType = {
  activeKey: React.Key | React.Key[] | undefined;
  setActiveKey: React.Dispatch<React.SetStateAction<React.Key | React.Key[] | undefined>>;
};

export const CollapseContext = createContext<CollapseContextType | null>(null);

export const useCollapseContext = () => {
  const tabsContext = useContext(CollapseContext);

  if (tabsContext === null) {
    throw new Error('useCollapseContext must be used within a CollapseProvider');
  }
  return tabsContext;
};
