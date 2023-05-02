import classNames from 'classnames';
import { uniqueId } from 'lodash';
import React, { forwardRef, useId, useState } from 'react';
import { Variant } from '../types';

export type AlertProps = {
  type?: Variant;
  onClose?: (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
  afterClose?: () => void;
  dismissible?: boolean;
  closeLabel?: React.ReactNode;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

const defaultTransitionedPropertyNames = ['max-height', 'opacity', 'padding-bottom', 'padding-top'];

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    type = 'primary',
    onClose,
    afterClose,
    dismissible,
    closeLabel,
    children,
    style,
    className,
  } = props;
  const [visible, setVisible] = useState<boolean>(true);
  const id = `alert-${useId?.() ?? uniqueId()}`;
  const transitionedPropertyNames = React.useRef(defaultTransitionedPropertyNames);

  const handleClose = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    onClose?.(e);
  };

  if (!visible) {
    return null;
  }

  return (
    <>
      {dismissible && <input className="alert-state" id={id} type="checkbox" />}
      <div
        ref={ref}
        style={{ width: 'auto', ...style }}
        onTransitionEnd={(e) => {
          if ((e.target as HTMLDivElement).matches('.alert.dismissible')) {
            transitionedPropertyNames.current = transitionedPropertyNames.current.filter(
              (name) => e.propertyName !== name,
            );
            if (
              Array.isArray(transitionedPropertyNames.current) &&
              !transitionedPropertyNames.current.length
            ) {
              setVisible(false);
              afterClose?.();
              transitionedPropertyNames.current = defaultTransitionedPropertyNames;
            }
          }
        }}
        className={classNames('alert', `alert-${type}`, { dismissible }, className)}
      >
        {children}
        {dismissible ? (
          <label htmlFor={id} className="btn-close" onClick={handleClose}>
            {closeLabel ? closeLabel : 'X'}
          </label>
        ) : null}
      </div>
    </>
  );
});

export default Alert;
