import { Form, FormProps } from './Form';
import { FormGroup, FormGroupProps } from './FormGroup';

const CombinedForm = Object.assign(Form, {
  Group: FormGroup,
});

export { CombinedForm as Form, FormGroup };
export type { FormGroupProps, FormProps };
