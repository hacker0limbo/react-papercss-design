import { useControllableValue } from 'ahooks';
import clsx from 'clsx';
import { omit } from 'lodash-es';
import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { FormContext } from '../Form/FormContext';
import { FormGroupContext } from '../Form/FormGroupContext';
import { Variant } from '../types';

export type SwitchTileProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  checkedContent?: React.ReactNode;
  /**
   *
   * checked background
   * @default 'primary'
   */
  checkedType?: Variant;
  /**
   * unChecked background
   */
  unCheckedContent?: React.ReactNode;
  unCheckedType?: Variant;
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * add border or not
   * @default true
   */
  bordered?: boolean;
} & Omit<React.ComponentPropsWithoutRef<'input'>, 'checked' | 'defaultChecked' | 'onChange'>;

type SwitchTileRuleNames = 'switchTile' | 'switchTileCard' | 'disabled';

const useStyles = createUseStyles<SwitchTileRuleNames>({
  // reference: https://github.com/papercss/papercss/blob/master/dist/paper.css#L2242
  switchTile: {
    '&.paper-switch-tile': {
      cursor: 'pointer',
      display: 'inline-block',
      // float: 'left',
      height: '80px',
      margin: '40px 0 0 40px',
      perspective: '1000px',
      position: 'relative',
      transform: 'translate(-50%, -50%)',
      transformStyle: 'preserve-3d',
      width: '80px',
    },
    '&.paper-switch-tile:hover .paper-switch-tile-card': {
      boxShadow: '2px 8px 4px -5px rgba(0, 0, 0, 0.2)',
      transform: 'rotateX(30deg)',
    },
    '&.paper-switch-tile:hover:checked + .paper-switch-tile-card': {
      backgroundColor: 'transparent',
      boxShadow: '0 10px 15px -15px rgba(0, 0, 0, 0.9)',
      transform: 'rotateX(150deg)',
    },
    '&.paper-switch-tile input': {
      display: 'none',
    },
    '&.paper-switch-tile input:checked + .paper-switch-tile-card': {
      transform: 'rotateX(180deg)',
    },
    // disabled state
    '&.paper-switch-tile input[disabled] + .paper-switch-tile-card': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  switchTileCard: {
    '&.paper-switch-tile-card': {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      height: '100%',
      position: 'relative',
      transformStyle: 'preserve-3d',
      transition: 'all 600ms',
      width: '100%',
    },
    '&.paper-switch-tile-card div': {
      WebkitBackfaceVisibility: 'hidden',
      backfaceVisibility: 'hidden',
      boxShadow: '2px 8px 8px -5px rgba(0, 0, 0, 0.3)',
      height: '100%',
      lineHeight: '70px',
      position: 'absolute',
      textAlign: 'center',
      width: '100%',
    },
    '&.paper-switch-tile-card .paper-switch-tile-card-back': {
      transform: 'rotateX(180deg)',
    },
  },
  disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

/**
 * SwitchTile component
 */
export const SwitchTile = React.forwardRef<HTMLInputElement, SwitchTileProps>((props, ref) => {
  const {
    className,
    style,
    bordered = true,
    disabled,
    checkedContent,
    unCheckedContent,
    checkedType = 'primary',
    unCheckedType,
    id,
    ...restProps
  } = omit(props, ['defaultChecked', 'checked', 'onChange']);

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
      className={clsx(
        'paper-switch-tile',
        classes.switchTile,
        disabled && classes.disabled,
        className,
      )}
      style={style}
    >
      <input
        id={id || controlId}
        ref={ref}
        checked={checked}
        disabled={disabled || formDisabled}
        type="checkbox"
        onChange={(e) => {
          setChecked(e.target.checked, e);
        }}
        {...restProps}
      />
      <div className={clsx('paper-switch-tile-card', classes.switchTileCard, bordered && 'border')}>
        <div
          className={clsx(
            `paper-switch-tile-card-front`,
            bordered && 'border',
            unCheckedType && `background-${unCheckedType}`,
          )}
        >
          {unCheckedContent}
        </div>
        <div
          className={clsx(
            `paper-switch-tile-card-back`,
            bordered && 'border',
            checkedType && `background-${checkedType}`,
          )}
        >
          {checkedContent}
        </div>
      </div>
    </label>
  );
});

SwitchTile.displayName = 'SwitchTile';
