import { TabPane, TabPaneItemProps, TabPaneProps } from './TabPane';
import { Tabs, TabsProps } from './Tabs';

const CombinedTabs = Object.assign(Tabs, {
  TabPane,
});

export { CombinedTabs as Tabs };
export type { TabPaneItemProps, TabPaneProps, TabsProps };
