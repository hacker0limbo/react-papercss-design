import { Select, SelectOptionItemProps, SelectProps } from './Select';
import { SelectOption, SelectOptionProps } from './SelectOption';

const CombinedSelect = Object.assign(Select, {
  Option: SelectOption,
});

export { CombinedSelect as Select, SelectOption };
export type { SelectOptionItemProps, SelectOptionProps, SelectProps };
