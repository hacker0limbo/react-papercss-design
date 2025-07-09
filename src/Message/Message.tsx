import clsx from 'clsx';
import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { TransitionStatus, useTransitionState } from 'react-transition-state';
import { Variant } from '../types';

// https://juejin.cn/post/6879796850438717453
export type MessageProps = {
  children?: React.ReactNode;
  // alias for children
  content?: React.ReactNode;
  type?: Variant;
  dismissible?: boolean;
  messageKey?: React.Key;
  onClose?: () => void;
} & React.ComponentPropsWithoutRef<'div'>;

type MessageRuleNames = 'message' | 'hidden';

const useStyles = createUseStyles<MessageRuleNames, { status: TransitionStatus }>({
  message: {
    '&.alert': {
      display: 'inline-block',
      transition: 'all 235ms ease-in-out 0s',
      width: 'fit-content',
    },
  },
  hidden: {
    borderWidth: 0,
    margin: 0,
    maxHeight: 0,
    opacity: 0,
    paddingBottom: 0,
    paddingTop: 0,
  },
});

/**
 * Similar to Alert, but without state control.
 */
export const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  (
    { type = 'primary', dismissible, content, children, onClose, messageKey, ...restProps },
    ref,
  ) => {
    const [{ status, isMounted }, toggle] = useTransitionState({
      timeout: 500,
      mountOnEnter: true,
      unmountOnExit: true,
      preEnter: true,
    });
    const classes = useStyles({ status });

    useEffect(() => {
      toggle(true);
      return () => {
        toggle(false);
      };
    }, [toggle]);

    return isMounted ? (
      <div
        key={messageKey}
        className={clsx(
          'alert',
          'shadow',
          type && `alert-${type}`,
          // 这里加上 dismissible 反而会破坏原始的布局, 因此省去
          // dismissible && 'dismissible',
          classes.message,
          (status === 'preEnter' || status === 'exiting') && classes.hidden,
        )}
        ref={ref}
        {...restProps}
      >
        {content || children}
        {dismissible && (
          <label
            className="btn-close"
            onClick={() => {
              onClose?.();
            }}
          >
            X
          </label>
        )}
      </div>
    ) : null;
  },
);

Message.displayName = 'Message';
