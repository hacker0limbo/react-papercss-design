import { TabPane, TabPaneProps } from './TabPane';
import { TabItem, Tabs, TabsProps } from './Tabs';

const CombinedTabs = Object.assign(Tabs, {
  TabPane,
});

export { CombinedTabs as Tabs };
export type { TabItem, TabsProps, TabPaneProps };
