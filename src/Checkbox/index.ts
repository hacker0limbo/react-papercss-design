import { Checkbox } from './Checkbox';
import { CheckboxGroup } from './CheckboxGroup';

const CombinedCheckbox = Object.assign(Checkbox, {
  Group: CheckboxGroup,
});

export { CombinedCheckbox as Checkbox, CheckboxGroup };

export type { CheckboxProps } from './Checkbox';
export type { CheckboxGroupOptionProps, CheckboxGroupProps } from './CheckboxGroup';
