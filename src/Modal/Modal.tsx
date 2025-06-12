import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Button } from '../Button';
import { Portal, PortalProps } from '../Portal';
import { Space } from '../Space';
import { Variant } from '../types';

export type ModalProps = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  open: boolean;
  onOk: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onCancel: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /**
   * custom footer, if not provided, will use default footer with ok and cancel buttons
   */
  footer?: React.ReactNode;
  /**
   * the container to render the modal, default is document.body
   * @default document.body
   */
  container?: PortalProps['container'];
  /**
   * show close label on right top corner
   * @default true
   */
  closable?: boolean;
  /**
   * close label
   * @default 'X'
   */
  closeLabel?: React.ReactNode;
  bodyStyle?: React.CSSProperties;
  /**
   * whether to destroy the modal when it is closed, dom will be removed from the DOM
   * @default false
   */
  destroyOnClose?: boolean;
  /**
   * whether to close the modal when clicking on the mask
   * @default true
   */
  maskClosable?: boolean;
  /**
   * ok button text
   * @default 'Ok'
   */
  okText?: string;
  /**
   * cancel button text
   * @default 'Cancel'
   */
  cancelText?: string;
  /**
   * ok button type
   * @default 'secondary'
   */
  okType?: Variant;
  /**
   * width of the modal, can be a string or number
   * @default 480
   */
  width?: string | number;
} & React.ComponentPropsWithoutRef<'div'>;

type ModalRuleNames = 'open' | 'modalBg';

const useStyles = createUseStyles<ModalRuleNames, Pick<ModalProps, 'width' | 'maskClosable'>>({
  // show modal
  open: {
    '&.modal': {
      opacity: 1,
      visibility: 'visible',
      '& > .modal-body': {
        width: ({ width }) => (typeof width === 'number' ? `${width}px` : width),
        top: '50%',
      },
    },
  },
  modalBg: {
    '&.modal-bg': {
      cursor: ({ maskClosable }) => (maskClosable ? 'pointer' : 'default'),
    },
  },
});

/**
 * Modal component, a dialog box that appears on top of the current page
 */
export const Modal = React.forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    title,
    subtitle,
    open,
    onOk,
    onCancel,
    footer,
    container,
    closable = true,
    closeLabel = 'X',
    bodyStyle,
    destroyOnClose = false,
    maskClosable = true,
    children,
    okText = 'Ok',
    cancelText = 'Cancel',
    okType = 'secondary',
    width = 480,
    ...restProps
  } = props;
  const classes = useStyles({ width, maskClosable });

  // 如果开启了 destroyOnClose, 那么关闭状态下不渲染 Modal 组件, DOM 将不再存在, 注意这么做会丢失 Modal 的动画
  if (destroyOnClose && !open) {
    return null;
  }

  return (
    <Portal container={container}>
      <div className={clsx('modal', { [classes.open]: open })} ref={ref} {...restProps}>
        <div
          className={clsx('modal-bg', classes.modalBg)}
          onClick={() => {
            if (maskClosable) {
              onCancel();
            }
          }}
        />
        <div className="modal-body">
          {closable ? (
            <div className="btn-close" onClick={onCancel}>
              {closeLabel}
            </div>
          ) : null}
          {title ? <h4 className="modal-title">{title}</h4> : null}
          {subtitle ? <h5 className="modal-subtitle">{subtitle}</h5> : null}
          {typeof children === 'string' ? (
            <p className="modal-text" style={bodyStyle}>
              {children}
            </p>
          ) : (
            <div style={bodyStyle}>{children}</div>
          )}
          {footer || footer === null ? (
            footer
          ) : (
            <Space>
              <Button type={okType} onClick={onOk}>
                {okText}
              </Button>
              <Button onClick={onCancel}>{cancelText}</Button>
            </Space>
          )}
        </div>
      </div>
    </Portal>
  );
});

Modal.displayName = 'Modal';
