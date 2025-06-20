import { useControllableValue } from 'ahooks';
import clsx from 'clsx';
import { omit } from 'lodash-es';
import React, { useContext, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { FormContext } from '../Form/FormContext';
import { FormGroupContext } from '../Form/FormGroupContext';
import { RadioGroupContext } from './RadioGroupContext';

export type RadioProps = {
  // controlled value
  checked?: boolean;
  // unControlled value
  defaultChecked?: boolean;
  /**
   * onChange event handler
   * @param checked checked value
   * @param e ChangeEvent
   */
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  // just re-write value type
  value?: string | number;
  children?: React.ReactNode;
} & Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'onChange' | 'checked' | 'defaultChecked' | 'value'
>;

type RadioRuleNames = 'radio' | 'insideRadioGroup';

const useStyles = createUseStyles<RadioRuleNames>({
  // Due to papercss styles are hardcoded and bind with .form-group. to use radio standalone, copy styles from papercss
  // css from: https://github.com/papercss/papercss/blob/master/dist/paper.css#L2069
  radio: {
    cursor: 'pointer',
    display: 'inline-block',
    // checked state
    '& input[type="radio"]:checked + span::before': {
      background: `url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A//www.w3.org/2000/svg'%20viewBox%3D'0%200%20100%20100'%3E%3Cpath%20fill%3D'%230b74d5'%20d%3D'M49.346,46.341c-3.79-2.005,3.698-10.294,7.984-8.89%20c8.713,2.852,4.352,20.922-4.901,20.269c-4.684-0.33-12.616-7.405-14.38-11.818c-2.375-5.938,7.208-11.688,11.624-13.837%20c9.078-4.42,18.403-3.503,22.784,6.651c4.049,9.378,6.206,28.09-1.462,36.276c-7.091,7.567-24.673,2.277-32.357-1.079%20c-11.474-5.01-24.54-19.124-21.738-32.758c3.958-19.263,28.856-28.248,46.044-23.244c20.693,6.025,22.012,36.268,16.246,52.826%20c-5.267,15.118-17.03,26.26-33.603,21.938c-11.054-2.883-20.984-10.949-28.809-18.908C9.236,66.096,2.704,57.597,6.01,46.371%20c3.059-10.385,12.719-20.155,20.892-26.604C40.809,8.788,58.615,1.851,75.058,12.031c9.289,5.749,16.787,16.361,18.284,27.262%20c0.643,4.698,0.646,10.775-3.811,13.746'%3E%3C/path%3E%3C/svg%3E") left center no-repeat`,
    },
    // disabled state
    '& input[disabled] + span::before': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    '& input[disabled] + span': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    // input styles
    '& input': {
      border: 0,
      height: 1,
      margin: -1,
      opacity: 0,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: 1,
      '& + span::before': {
        borderColor: 'var(--primary)',
        borderStyle: 'solid',
        borderWidth: '2px',
        content: '""',
        display: 'inline-block',
        height: '1rem',
        marginRight: '0.75em',
        position: 'relative',
        verticalAlign: '-0.25em',
        width: '1rem',
        // radio border
        borderBottomLeftRadius: '0.7rem 1rem',
        borderBottomRightRadius: '1rem 0.9rem',
        borderTopLeftRadius: '1rem 1rem',
        borderTopRightRadius: '1rem 0.6rem',
      },
    },
  },
  // inside radio group, give margin-right to each radio
  insideRadioGroup: {
    marginRight: 12,
  },
});

/**
 * Radio component
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { className, style, children, value, disabled, id, ...restProps } = omit(props, [
    'defaultChecked',
    'checked',
    'onChange',
  ]);
  const [checked, setChecked] = useControllableValue<boolean>(props, {
    defaultValue: false,
    valuePropName: 'checked',
    defaultValuePropName: 'defaultChecked',
  });
  const radioGroupContext = useContext(RadioGroupContext);

  const isCheckedByGroup = useMemo(() => {
    if (radioGroupContext) {
      return radioGroupContext.value === value;
    }
  }, [radioGroupContext, value]);
  const classes = useStyles();
  const { controlId } = useContext(FormGroupContext);
  const { disabled: formDisabled } = useContext(FormContext);

  return (
    <label
      className={clsx(
        'paper-radio',
        classes.radio,
        // when contains context, apply insideRadioGroup style
        !!radioGroupContext && classes.insideRadioGroup,
        className,
      )}
      style={style}
    >
      <input
        id={id || controlId}
        ref={ref}
        value={value}
        checked={radioGroupContext ? isCheckedByGroup : checked}
        onChange={(e) => {
          const isChecked = e.target.checked;

          if (radioGroupContext) {
            // 如果存在 context, 则使用 context 的 setValue 方法, 传入事件对象
            radioGroupContext.setValue(value, e);
          } else {
            // 否则内部自己管理状态
            setChecked(isChecked, e);
          }
        }}
        disabled={disabled || radioGroupContext?.disabled || formDisabled}
        type="radio"
        {...restProps}
      />
      <span>{children}</span>
    </label>
  );
});

Radio.displayName = 'Radio';
