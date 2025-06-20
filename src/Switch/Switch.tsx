import { useControllableValue } from 'ahooks';
import clsx from 'clsx';
import { omit } from 'lodash-es';
import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { FormContext } from '../Form/FormContext';
import { FormGroupContext } from '../Form/FormGroupContext';

export type SwitchProps = {
  /**
   * switch type
   * @default 'default'
   */
  type?: 'default' | 'inline';
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  round?: boolean;
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
} & Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange' | 'checked' | 'defaultChecked'>;

type SwitchRuleNames = 'switch' | 'switchDefault' | 'switchInline';

const useStyles = createUseStyles<SwitchRuleNames>({
  // common switch styles
  // reference: https://github.com/papercss/papercss/blob/master/dist/paper.css#L2137
  switch: {
    margin: '0 10px 0 0',
    position: 'relative',
    display: 'inline-block',
    '& input': {
      height: 0,
      opacity: 0,
      width: 0,
    },
    // checked state
    '& input:checked + .paper-switch-slider': {
      backgroundColor: 'var(--success-light)',
    },
    '& input:checked + .paper-switch-slider::before': {
      transform: 'translateX(26px)',
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
    '& input:focus + .paper-switch-slider': {
      boxShadow: '0 0 3px #0b74d5',
    },
    // slider
    '& .paper-switch-slider': {
      borderColor: 'var(--primary)',
      borderBottomLeftRadius: '15px 255px',
      borderBottomRightRadius: '225px 15px',
      borderStyle: 'solid',
      borderTopLeftRadius: '255px 15px',
      borderTopRightRadius: '15px 225px',
      borderWidth: '2px',
      bottom: 0,
      cursor: 'pointer',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      transition: '0.4s',
    },
    '& .paper-switch-slider::before': {
      background: 'var(--secondary)',
      borderBottomLeftRadius: '15px 255px',
      borderBottomRightRadius: '225px 15px',
      borderTopLeftRadius: '255px 15px',
      borderTopRightRadius: '15px 225px',
      content: '""',
      left: '4px',
      position: 'absolute',
      transition: '0.4s',
    },
    // round slider
    '& .paper-switch-slider.round': {
      borderColor: 'var(--primary)',
      borderBottomLeftRadius: '0.7rem 1rem',
      borderBottomRightRadius: '1rem 0.9rem',
      borderStyle: 'solid',
      borderTopLeftRadius: '1rem 1rem',
      borderTopRightRadius: '1rem 0.6rem',
      borderWidth: '2px',
    },
    '& .paper-switch-slider.round::before': {
      background: `url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A//www.w3.org/2000/svg'%20viewBox%3D'0%200%20100%20100'%3E%3Cpath%20fill%3D'%230071de'%20d%3D'M49.346,46.341c-3.79-2.005,3.698-10.294,7.984-8.89%20c8.713,2.852,4.352,20.922-4.901,20.269c-4.684-0.33-12.616-7.405-14.38-11.818c-2.375-5.938,7.208-11.688,11.624-13.837%20c9.078-4.42,18.403-3.503,22.784,6.651c4.049,9.378,6.206,28.09-1.462,36.276c-7.091,7.567-24.673,2.277-32.357-1.079%20c-11.474-5.01-24.54-19.124-21.738-32.758c3.958-19.263,28.856-28.248,46.044-23.244c20.693,6.025,22.012,36.268,16.246,52.826%20c-5.267,15.118-17.03,26.26-33.603,21.938c-11.054-2.883-20.984-10.949-28.809-18.908C9.236,66.096,2.704,57.597,6.01,46.371%20c3.059-10.385,12.719-20.155,20.892-26.604C40.809,8.788,58.615,1.851,75.058,12.031c9.289,5.749,16.787,16.361,18.284,27.262%20c0.643,4.698,0.646,10.775-3.811,13.746'%3E%3C/path%3E%3C/svg%3E") left center no-repeat`,
      borderBottomLeftRadius: '0.7rem 1rem',
      borderBottomRightRadius: '1rem 0.9rem',
      borderTopLeftRadius: '1rem 1rem',
      borderTopRightRadius: '1rem 0.6rem',
      left: '4px',
    },
  },
  // switch style for default type
  switchDefault: {
    '&.paper-switch': {
      height: '12px',
      width: '60px',
    },
    '&.paper-switch .paper-switch-slider::before': {
      bottom: '-6px',
      height: '20px',
      width: '20px',
    },
    '&.paper-switch .paper-switch-slider.round::before': {
      bottom: '-7px',
      height: '23px',
      width: '23px',
    },
  },
  // switch style for inline type
  switchInline: {
    '&.paper-switch-2': {
      height: '22px',
      width: '50px',
    },
    '&.paper-switch-2 .paper-switch-slider::before': {
      bottom: '2px',
      height: '14px',
      width: '14px',
    },
    '&.paper-switch-2 .paper-switch-slider.round::before': {
      bottom: '2px',
      height: '14px',
      width: '14px',
    },
  },
});

/**
 * Switch component
 */
export const Switch = React.forwardRef<HTMLLabelElement, SwitchProps>((props, ref) => {
  const {
    style,
    disabled,
    className,
    type = 'default',
    round,
    id,
    ...restProps
  } = omit(props, ['checked', 'defaultChecked', 'onChange']);
  const [checked, setChecked] = useControllableValue<boolean>(props, {
    defaultValue: false,
    defaultValuePropName: 'defaultChecked',
    valuePropName: 'checked',
  });
  const classes = useStyles();
  const { controlId } = useContext(FormGroupContext);
  const { disabled: formDisabled } = useContext(FormContext);

  return (
    <label
      ref={ref}
      className={clsx(
        type === 'inline' ? 'paper-switch-2' : 'paper-switch',
        classes.switch,
        type === 'default' ? classes.switchDefault : classes.switchInline,
        className,
      )}
      style={style}
    >
      <input
        id={id || controlId}
        disabled={disabled || formDisabled}
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked, e);
        }}
        {...restProps}
      />
      <span className={clsx({ round }, 'paper-switch-slider')} />
    </label>
  );
});

Switch.displayName = 'Switch';
