import { useControllableValue } from 'ahooks';
import clsx from 'clsx';
import { omit, uniq } from 'lodash-es';
import React, { useContext, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { FormContext } from '../Form/FormContext';
import { FormGroupContext } from '../Form/FormGroupContext';
import { CheckboxGroupContext } from './CheckboxGroupContext';

export type CheckboxProps = {
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

type CheckboxRuleNames = 'checkbox' | 'insideCheckboxGroup';

const useStyles = createUseStyles<CheckboxRuleNames>({
  // Due to papercss styles are hardcoded and bind with .form-group. to use radio standalone, copy styles from papercss
  // css from: https://github.com/papercss/papercss/blob/master/dist/paper.css#L2070
  checkbox: {
    cursor: 'pointer',
    display: 'inline-block',
    // checked state
    '& input[type=checkbox]:checked + span::before': {
      background: `url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A//www.w3.org/2000/svg'%20viewBox%3D'0%200%20100%20100'%3E%3Cpath%20stroke%3D'%230b74d5'%20fill-opacity%3D'0'%20stroke-width%3D'16'%20d%3D'm13,62c0.61067,1.6%201.3045,2.3045%201.75717,2.75716c0.72683,0.72684%201.24283,1.24284%202.07617,2.07617c0.54133,0.54133%201.04116,1.06035%201.82833,1.82383c0.5781,0.5607%201.00502,0.96983%202.02633,1.74417c0.55877,0.42365%201.191,0.84034%201.884,1.284c1.16491,0.74577%201.59777,1.00147%202.5,1.55067c0.4692,0.28561%201.43689,0.86868%201.93067,1.16534c0.99711,0.59904%201.99667,1.19755%202.49283,1.49866c0.98501,0.59779%201.47073,0.89648%201.94733,1.2c1.3971,0.88972%201.83738,1.19736%202.7,1.7955c0.42201,0.29262%201.24022,0.87785%202.05583,1.41917c0.79531,0.52785%201.59376,1.0075%202.38,1.43867c0.74477,0.40842%201.45167,0.75802%202.37817,1.22517c0.76133,0.38387%201.54947,0.82848%202.40717,1.41084c0.7312,0.49647%201.49563,1.08231%202.27884,1.258c0.35564,0.07978%200.14721,-0.95518%200.35733,-1.86867c0.18092,-0.78651%200.98183,-1.2141%200.99983,-2.07867c0.02073,-0.99529%200.07916,-1.79945%200.42533,-2.56133c0.43607,-0.95973%200.53956,-1.66774%200.79617,-2.68183c0.18888,-0.74645%200.39764,-1.31168%200.7785,-2.6235c0.20865,-0.71867%200.41483,-1.48614%200.708,-2.28c0.15452,-0.41843%200.77356,-1.73138%201.348,-2.64133c0.30581,-0.48443%200.65045,-0.97043%201.0065,-1.4745c0.74776,-1.05863%201.1531,-1.60163%201.9375,-2.77084c0.40621,-0.60548%200.80272,-1.23513%201.2045,-1.8765c0.40757,-0.65062%200.81464,-1.31206%201.2315,-1.9755c0.41946,-0.66757%200.83374,-1.34258%201.73067,-2.648c0.44696,-0.65053%200.91436,-1.28356%201.386,-1.9095c0.46972,-0.6234%200.94725,-1.2364%201.422,-1.8465c0.94116,-1.20947%201.86168,-2.40844%202.30367,-3.0105c0.438,-0.59664%200.86246,-1.19396%201.27501,-1.7895c0.40743,-0.58816%200.80352,-1.17234%201.185,-1.7535c1.10526,-1.68381%201.44079,-2.23511%201.77633,-2.7705c0.32878,-0.52461%200.96306,-1.5459%201.27467,-2.04c0.60654,-0.96177%201.20782,-1.88193%201.51051,-2.325c0.59013,-0.86381%201.17888,-1.68032%201.46416,-2.075c0.5498,-0.76063%201.31747,-1.8231%201.77883,-2.4895c0.43918,-0.63437%200.85266,-1.25267%201.45717,-2.15717c0.59549,-0.891%200.96531,-1.46814%201.51466,-2.22933c0.58413,-0.80936%201.12566,-1.40253%201.83801,-2.12333c0.61304,-0.62031%200.45171,-1.48306%200.7045,-2.34733c0.25668,-0.87762%200.75447,-1.62502%201,-2.40983c0.25128,-0.8032%200.7633,-1.39453%201.33217,-2.25417c0.54528,-0.82398%200.73415,-1.6714%201.31516,-2.336c0.55639,-0.63644%201.38658,-1.22588%201.8595,-1.9c0.5082,-0.72441%200.78867,-1.4%201.60266,-1.56667l0.71184,-0.4905'%3E%3C/path%3E%3C/svg%3E") left center no-repeat`,
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
        // checkbox border
        borderBottomLeftRadius: '15px 255px',
        borderBottomRightRadius: '225px 15px',
        borderTopLeftRadius: '255px 15px',
        borderTopRightRadius: '15px 225px',
      },
    },
  },
  insideCheckboxGroup: {
    marginRight: 12,
  },
});

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
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
  const checkboxGroupContext = useContext(CheckboxGroupContext);
  const isCheckedByGroup = useMemo(() => {
    if (checkboxGroupContext) {
      return checkboxGroupContext.value?.includes(value!);
    }
  }, [checkboxGroupContext, value]);
  const classes = useStyles();
  const { controlId } = useContext(FormGroupContext);
  const { disabled: formDisabled } = useContext(FormContext);

  return (
    <label
      className={clsx(
        'paper-check',
        classes.checkbox,
        !!checkboxGroupContext && classes.insideCheckboxGroup,
        className,
      )}
      style={style}
    >
      <input
        id={id || controlId}
        ref={ref}
        value={value}
        checked={checkboxGroupContext ? isCheckedByGroup : checked}
        onChange={(e) => {
          const isChecked = e.target.checked;

          if (checkboxGroupContext) {
            // 如果存在 context, 则使用 context 的 setValue 方法, 传入事件对象
            if (isChecked) {
              checkboxGroupContext.setValue((prevValue) => uniq([...prevValue, value!]), e);
            } else {
              checkboxGroupContext.setValue(
                (prevValue) => prevValue.filter((v) => v !== value!),
                e,
              );
            }
          } else {
            // 否则内部自己管理状态
            setChecked(isChecked, e);
          }
        }}
        disabled={disabled || checkboxGroupContext?.disabled || formDisabled}
        type="checkbox"
        {...restProps}
      />
      <span>{children}</span>
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
