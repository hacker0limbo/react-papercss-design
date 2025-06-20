import { useControllableValue } from 'ahooks';
import clsx from 'clsx';
import { omit } from 'lodash-es';
import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { FormContext } from '../Form/FormContext';
import { FormGroupContext } from '../Form/FormGroupContext';

/**
 * Input component
 */
export type InputProps = {
  block?: boolean;
  // controlled value
  value?: string;
  // unControlled value
  defaultValue?: string;
  /**
   * onChange event handler
   * @param value input value
   * @param e ChangeEvent
   */
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
} & Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange' | 'value' | 'defaultValue'>;

type InputRuleNames = 'inputBlock';

const useStyles = createUseStyles<InputRuleNames>({
  inputBlock: {
    width: '100%',
  },
});

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    block,
    className,
    id,
    disabled,
    ...restProps
    // restProps 里理论上不应该包含 value, onChange 和 defaultValue, 因为这三个属性都交给 useControllableValue 处理了, 虽然本身外部还是接受传入的
  } = omit(props, ['defaultValue', 'onChange', 'value']);
  const classes = useStyles();
  const [value, setValue] = useControllableValue<string>(props, {
    defaultValue: '',
  });
  const { controlId } = useContext(FormGroupContext);
  const { disabled: formDisabled } = useContext(FormContext);

  return (
    <input
      id={id || controlId}
      disabled={disabled || formDisabled}
      value={value}
      onChange={(e) => {
        // 这里的 setValue 就类似于 onChange, 只不过需要额外把原生的 event 传递出去
        setValue(e.target.value, e);
      }}
      ref={ref}
      className={clsx(block && ['input-block', classes.inputBlock], className)}
      {...restProps}
    />
  );
});

Input.displayName = 'Input';
