import { Switch } from './Switch';
import { SwitchTile } from './SwitchTile';

const combinedSwitch = Object.assign(Switch, { Tile: SwitchTile });

export type { SwitchTileProps } from './SwitchTile';
export { combinedSwitch as Switch, SwitchTile };
