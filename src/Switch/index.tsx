import { useControllableValue } from 'ahooks';
import clsx from 'clsx';
import React, { forwardRef } from 'react';

export type SwitchType = 'default' | 'inline';

export type SwitchProps = {
  className?: string;
  style?: React.CSSProperties;
  type?: SwitchType;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  round?: boolean;
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (checked: boolean, event: React.MouseEvent<HTMLInputElement>) => void;
};

const Switch = forwardRef<HTMLLabelElement, SwitchProps>((props, ref) => {
  const { disabled, onClick, onChange, style, className, type = 'default', round = false } = props;
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
      <label
        ref={ref}
        className={clsx(
          { 'paper-switch': type === 'default', 'paper-switch-2': type === 'inline' },
          className,
        )}
      >
        <input
          disabled={disabled}
          type="checkbox"
          checked={_checked}
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
        <span
          style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
          className={clsx({ round }, 'paper-switch-slider')}
        />
      </label>
    </div>
  );
});

export default Switch;
