import { useControllableValue } from 'ahooks';
import clsx from 'clsx';
import { omit } from 'lodash-es';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Radio, RadioProps } from './Radio';
import { RadioGroupContext } from './RadioGroupContext';

export type RadioGroupOptionProps = {
  label: React.ReactNode;
  value: string | number;
} & Omit<RadioProps, 'value' | 'label'>;

export type RadioGroupProps = {
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string | number, e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  options?: RadioGroupOptionProps[];
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange' | 'value' | 'defaultValue'>;

type RadioGroupRuleNames = 'radioGroup';

const useStyles = createUseStyles<RadioGroupRuleNames>({
  radioGroup: {
    display: 'inline-block',
  },
});

/**
 * RadioGroup component
 */
export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {
  const [value, setValue] = useControllableValue<string | number | undefined>(props);
  const { disabled, children, className, options, ...restProps } = omit(props, [
    'value',
    'defaultValue',
    'onChange',
  ]);
  const classes = useStyles();
  const childList = React.Children.toArray(children).filter(
    (c): c is React.ReactElement<RadioProps, typeof Radio> =>
      React.isValidElement(c) && c.type === Radio,
  );

  const renderOptions = () => {
    if (!options?.length) {
      return childList;
    }

    return options?.map(({ label, value, ...restRadioProps }, index) => (
      <Radio key={index} value={value} {...restRadioProps}>
        {label}
      </Radio>
    ));
  };

  return (
    <RadioGroupContext.Provider value={{ value, setValue, disabled }}>
      <div ref={ref} className={clsx(classes.radioGroup, className)} {...restProps}>
        {renderOptions()}
      </div>
    </RadioGroupContext.Provider>
  );
});

RadioGroup.displayName = 'RadioGroup';
