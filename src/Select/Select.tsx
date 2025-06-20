import { useControllableValue } from 'ahooks';
import { omit } from 'lodash-es';
import React, { useContext } from 'react';
import { FormContext } from '../Form/FormContext';
import { FormGroupContext } from '../Form/FormGroupContext';
import { SelectOption, SelectOptionProps } from './SelectOption';

export type SelectOptionItemProps = {
  label: string;
  value: string;
} & Omit<SelectOptionProps, 'value' | 'label'>;

export type SelectProps = {
  options?: SelectOptionItemProps[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, e: React.ChangeEvent<HTMLSelectElement>) => void;
} & Omit<
  React.ComponentPropsWithoutRef<'select'>,
  // TODO: does not support multiple selection yet
  'value' | 'defaultValue' | 'onChange' | 'multiple'
>;

/**
 * Select component, similar to HTML <select> element
 * TODO: Need to support multiple selection, now multiple attribute is disabled
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { options, children, id, disabled, ...restProps } = omit(props, [
    'value',
    'defaultValue',
    'onChange',
  ]);
  const childList = React.Children.toArray(children).filter(
    (c): c is React.ReactElement<SelectOptionProps, typeof SelectOption> =>
      React.isValidElement(c) && c.type === SelectOption,
  );
  const { controlId } = useContext(FormGroupContext);
  const { disabled: formDisabled } = useContext(FormContext);

  const [value, setValue] = useControllableValue<string>(props, {
    defaultValue: options ? options[0]?.value : (childList[0]?.props.value as string) || '',
  });

  const renderOptions = () => {
    if (!options?.length) {
      return childList;
    }

    return options.map(({ label, value, ...restSelectOptionProps }, index) => (
      <SelectOption key={index} value={value} {...restSelectOptionProps}>
        {label}
      </SelectOption>
    ));
  };

  return (
    <select
      id={id || controlId}
      disabled={disabled || formDisabled}
      ref={ref}
      {...restProps}
      value={value}
      onChange={(e) => {
        setValue(e.target.value, e);
      }}
    >
      {renderOptions()}
    </select>
  );
});
