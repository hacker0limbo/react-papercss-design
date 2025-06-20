import React from 'react';

export type SelectOptionProps = React.ComponentPropsWithoutRef<'option'>;

/**
 * Option component, same as HTML <option> element.
 */
export const SelectOption = React.forwardRef<HTMLOptionElement, SelectOptionProps>((props, ref) => {
  return <option ref={ref} {...props} />;
});

SelectOption.displayName = 'SelectOption';
