import { Radio } from './Radio';
import { RadioGroup } from './RadioGroup';

const CombinedRadio = Object.assign(Radio, {
  Group: RadioGroup,
});

export type { RadioProps } from './Radio';
export type { RadioGroupOptionProps, RadioGroupProps } from './RadioGroup';

export { CombinedRadio as Radio, RadioGroup };
