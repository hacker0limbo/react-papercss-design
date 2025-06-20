import { useControllableValue } from 'ahooks';
import clsx from 'clsx';
import { omit } from 'lodash-es';
import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { FormContext } from '../Form/FormContext';
import { FormGroupContext } from '../Form/FormGroupContext';
import { Variant } from '../types';

export type SliderProps = {
  type?: Variant;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  block?: boolean;
  htmlType?: React.ComponentPropsWithoutRef<'button'>['type'];
} & Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange' | 'value' | 'defaultValue'>;

type SliderRuleNames = 'sliderTrack' | 'sliderThumb' | 'slider' | 'block';

const useStyles = createUseStyles<SliderRuleNames, SliderProps>({
  // copy from https://github.com/papercss/papercss/blob/master/dist/paper.css#L2291
  sliderTrack: {
    backgroundColor: 'var(--secondary)',
    borderColor: 'var(--primary)',
    borderRadius: 18,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: '1px 1px 1px #000, 0 0 1px #0d0d0d',
    cursor: 'pointer',
    height: 8,
    margin: '10px 0',
    width: '100%',
  },
  sliderThumb: {
    backgroundColor: 'var(--white)',
    borderColor: 'var(--primary)',
    WebkitAppearance: 'none',
    appearance: 'none',
    borderBottomLeftRadius: '0.7rem 1rem',
    borderBottomRightRadius: '1rem 0.9rem',
    borderStyle: 'solid',
    borderTopLeftRadius: '1rem 1rem',
    borderTopRightRadius: '1rem 0.6rem',
    borderWidth: 1,
    boxShadow: '1px 1px 1px #000, 0 0 1px #0d0d0d',
    cursor: 'pointer',
    height: 36,
    marginTop: -14,
    width: 16,
  },
  slider: {
    '&[type="range"]': {
      appearance: 'none',
      borderWidth: 0,
      padding: 0,
    },
    // 在 dumi 由于 .global.less 里存在样式冲突, 这里手动再覆盖一下
    '&[type="range"]:focus': {
      borderWidth: 0,
    },
    '&[type="range"]::-webkit-slider-runnable-track': {
      extend: 'sliderTrack',
      backgroundColor: ({ type = 'secondary' }) => `var(--${type})`,
    },
    '&[type="range"]::-webkit-slider-thumb': {
      extend: 'sliderThumb',
    },
    '&[type="range"]::-moz-range-track': {
      extend: 'sliderTrack',
    },
    '&[type="range"]::-moz-range-thumb': {
      extend: 'sliderThumb',
    },
    // does not support IE
  },
  block: {
    // papercss input block is bind with .form-group. Here we implement it manually
    width: '100%',
  },
});

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>((props, ref) => {
  const {
    block,
    min = 0,
    max = 100,
    className,
    type = 'secondary',
    htmlType = 'range',
    id,
    disabled,
    ...restProps
  } = omit(props, ['value', 'defaultValue', 'onChange']);
  const [value, setValue] = useControllableValue<number>(props, {
    defaultValue: 50,
  });
  const classes = useStyles({ type });
  const { controlId } = useContext(FormGroupContext);
  const { disabled: formDisabled } = useContext(FormContext);

  return (
    <input
      id={id || controlId}
      disabled={disabled || formDisabled}
      type={htmlType}
      min={min}
      max={max}
      value={value}
      onChange={(e) => {
        setValue(Number(e.target.value), e);
      }}
      ref={ref}
      className={clsx(classes.slider, block && [classes.block, 'input-block'], className)}
      {...restProps}
    />
  );
});

Slider.displayName = 'Slider';
