import { Collapse, CollapseProps } from './Collapse';
import { CollapsePane, CollapsePaneProps } from './CollapsePane';

const CombinedCollapse = Object.assign(Collapse, {
  Pane: CollapsePane,
});

export { CombinedCollapse as Collapse };
export type { CollapsePaneProps, CollapseProps };
