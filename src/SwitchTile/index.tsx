import { useControllableValue } from 'ahooks';
import classNames from 'classnames';
import React, { forwardRef } from 'react';
import { Variant } from '../types';

export type SwitchTileProps = {
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  checkedChildren: React.ReactNode;
  checkedType?: Variant;
  unCheckedChildren: React.ReactNode;
  unCheckedType?: Variant;
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (checked: boolean, event: React.MouseEvent<HTMLInputElement>) => void;
};

const SwitchTile = forwardRef<HTMLLabelElement, SwitchTileProps>((props, ref) => {
  const {
    disabled,
    onClick,
    onChange,
    style,
    className,
    checkedChildren,
    unCheckedChildren,
    checkedType = 'default',
    unCheckedType = 'primary',
  } = props;
  const [_checked, _setChecked] = useControllableValue<boolean>(props, {
    defaultValue: false,
    defaultValuePropName: 'defaultChecked',
    valuePropName: 'checked',
  });
  return (
    <div
      className="form-group"
      style={{ opacity: disabled ? 0.5 : 1, marginBottom: 0, display: 'inline-block', ...style }}
    >
      <label ref={ref} className={classNames('paper-switch-tile', className)}>
        <input
          checked={_checked}
          disabled={disabled}
          type="checkbox"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (!disabled) {
              _setChecked(e.target.checked);
              onChange?.(e.target.checked, e);
            }
          }}
          onClick={(e: React.MouseEvent<HTMLInputElement>) => {
            if (!disabled) {
              _setChecked((e.target as HTMLInputElement).checked);
              onClick?.((e.target as HTMLInputElement).checked, e);
            }
          }}
        />
        <div
          style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
          className="paper-switch-tile-card border"
        >
          <div
            className={classNames(
              `paper-switch-tile-card-${_checked ? 'back' : 'front'}`,
              'border',
              `background-${_checked ? checkedType : unCheckedType}`,
            )}
          >
            {_checked ? checkedChildren : unCheckedChildren}
          </div>
          <div
            className={classNames(
              `paper-switch-tile-card-${_checked ? 'front' : 'back'}`,
              'border',
              `background-${_checked ? unCheckedType : checkedType}`,
            )}
          >
            {_checked ? unCheckedChildren : checkedChildren}
          </div>
        </div>
      </label>
    </div>
  );
});

export default SwitchTile;
