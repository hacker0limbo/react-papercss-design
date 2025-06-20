import React from 'react';
import { FormContext } from './FormContext';

export type FormProps = {
  // disable all form elements
  disabled?: boolean;
} & React.ComponentPropsWithoutRef<'form'>;

/***
 * Form component, just a wrapper around the native form element.
 */
export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ disabled, children, ...restProps }, ref) => {
    return (
      <FormContext.Provider value={{ disabled }}>
        <form ref={ref} {...restProps}>
          {children}
        </form>
      </FormContext.Provider>
    );
  },
);

Form.displayName = 'Form';
