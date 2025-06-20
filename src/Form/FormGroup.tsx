import clsx from 'clsx';
import { uniqueId } from 'lodash-es';
import React from 'react';
import type { DynamicRefForwardingComponent } from '../types';
import { FormGroupContext } from './FormGroupContext';

export type FormGroupProps = {
  /**
   * as prop for the form group, sometimes you might want to set it to fieldset, e.g. for Switch.Tile
   * @default 'div'
   */
  as?: React.ElementType;
  /**
   * id for the form control, used to link the label and input elements.
   * If not provided, a unique id will be provided.
   */
  controlId?: string;
} & React.HTMLAttributes<HTMLElement>;

const id = uniqueId('formGroup-');

/**
 * FormGroup component
 * @reference https://github.com/react-bootstrap/react-bootstrap/blob/master/src/FormGroup.tsx
 */
export const FormGroup: DynamicRefForwardingComponent<'div', FormGroupProps> = React.forwardRef(
  ({ as: Comp = 'div', controlId = id, children, className, ...restProps }, ref) => {
    return (
      <Comp ref={ref} className={clsx('form-group', className)} {...restProps}>
        <FormGroupContext.Provider value={{ controlId }}>{children}</FormGroupContext.Provider>
      </Comp>
    );
  },
);

FormGroup.displayName = 'FormGroup';
