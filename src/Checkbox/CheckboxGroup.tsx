import { useControllableValue } from 'ahooks';
import clsx from 'clsx';
import { omit } from 'lodash-es';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Checkbox, CheckboxProps } from './Checkbox';
import { CheckboxGroupContext } from './CheckboxGroupContext';

export type CheckboxGroupOptionProps = {
  label: React.ReactNode;
  value: string | number;
} & Omit<CheckboxProps, 'value' | 'label'>;

export type CheckboxGroupProps = {
  value?: (string | number)[];
  defaultValue?: (string | number)[];
  onChange?: (value: (string | number)[], e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  options?: CheckboxGroupOptionProps[];
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange' | 'value' | 'defaultValue'>;

type CheckboxGroupRuleNames = 'checkboxGroup';

const useStyles = createUseStyles<CheckboxGroupRuleNames>({
  checkboxGroup: {
    display: 'inline-block',
  },
});

/**
 * CheckboxGroup component
 */
export const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>((props, ref) => {
  const [value, setValue] = useControllableValue<(string | number)[]>(props, {
    defaultValue: [],
  });
  const { disabled, children, className, options, ...restProps } = omit(props, [
    'value',
    'defaultValue',
    'onChange',
  ]);
  const classes = useStyles();
  const childList = React.Children.toArray(children).filter(
    (c): c is React.ReactElement<CheckboxProps, typeof Checkbox> =>
      React.isValidElement(c) && c.type === Checkbox,
  );

  const renderOptions = () => {
    if (!options?.length) {
      return childList;
    }

    return options?.map(({ label, value, ...restCheckboxProps }, index) => (
      <Checkbox key={index} value={value} {...restCheckboxProps}>
        {label}
      </Checkbox>
    ));
  };

  return (
    <CheckboxGroupContext.Provider value={{ value, setValue, disabled }}>
      <div ref={ref} className={clsx(classes.checkboxGroup, className)} {...restProps}>
        {renderOptions()}
      </div>
    </CheckboxGroupContext.Provider>
  );
});

CheckboxGroup.displayName = 'CheckboxGroup';
