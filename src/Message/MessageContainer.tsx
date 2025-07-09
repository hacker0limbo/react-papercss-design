import { isNil, uniqueId } from 'lodash-es';
import React, { useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Portal, PortalProps } from '../Portal';
import { Message, MessageProps } from './Message';

export type MessageContainerProps = {
  /**
   * the container to render the modal, default is document.body
   * @default document.body
   */
  container?: PortalProps['container'];
};

type MessageContainerRuleNames = 'messageContainer' | 'messageWrapper';

export type MessageConfigProps = {
  /**
   * auto close after duration, unit is seconds, set to falsy value e.g. 0 or undefined or null to disable auto close
   * @default 3
   */
  duration?: number | null;
} & MessageProps;

export type MessageHandle = {
  remove: (key?: React.Key) => void;
  add: (config: MessageConfigProps) => React.Key;
  config: (config: MessageDefaultConfig) => void;
};

// default config for message
export type MessageDefaultConfig = {
  duration?: number | null;
  // max count of messages to show, set to 0 or undefined to disable max count
  maxCount?: number;
  align?: 'left' | 'center' | 'right';
  dismissible?: boolean;
};

const useStyles = createUseStyles<MessageContainerRuleNames, MessageDefaultConfig>({
  messageContainer: {
    position: 'fixed',
    top: 8,
    left: 0,
    width: '100%',
    zIndex: 999,
  },
  messageWrapper: {
    padding: '8px 8px 0',
    textAlign: ({ align = 'center' }) => align,
  },
});

export const MessageContainer = React.forwardRef<MessageHandle, MessageContainerProps>(
  ({ container }, ref) => {
    const [defaultConfig, setDefaultConfig] = useState<MessageDefaultConfig>({
      duration: 3,
      align: 'center',
    });
    const [messageConfigs, setMessageConfigs] = useState<MessageProps[]>([]);
    const classes = useStyles(defaultConfig);

    const remove = useCallback((key?: React.Key | null) => {
      if (isNil(key)) {
        setMessageConfigs([]);
      } else {
        setMessageConfigs((prevConfigs) =>
          prevConfigs.filter((config) => config.messageKey !== key),
        );
      }
    }, []);

    const add = useCallback(
      (config: MessageConfigProps) => {
        const {
          duration = defaultConfig.duration,
          messageKey = uniqueId('message_'),
          dismissible = defaultConfig.dismissible,
          ...restConfig
        } = config;
        setMessageConfigs((prevConfigs) => [
          ...prevConfigs,
          { messageKey, dismissible, ...restConfig },
        ]);

        if (duration) {
          setTimeout(() => {
            remove(messageKey);
          }, duration * 1000);
        }

        return messageKey;
      },
      [remove, defaultConfig],
    );

    // use to update the default config
    const config = useCallback((newConfig: MessageDefaultConfig) => {
      setDefaultConfig((prevConfig) => ({
        ...prevConfig,
        ...newConfig,
      }));
    }, []);

    // expose the methods
    useImperativeHandle(
      ref,
      () => ({
        remove,
        add,
        config,
      }),
      [remove, add, config],
    );

    useEffect(() => {
      const { maxCount } = defaultConfig;
      // if maxCount is set, remove the oldest message when the count exceeds maxCount
      if (maxCount) {
        if (messageConfigs.length > maxCount) {
          remove(messageConfigs[0]?.messageKey);
        }
      }
    }, [defaultConfig, messageConfigs, remove]);

    return (
      <Portal container={container} id="message-portal-root">
        <div className={classes.messageContainer}>
          {messageConfigs.map(({ messageKey, onClose, ...restConfig }) => (
            <div key={'messageWrapper-' + messageKey} className={classes.messageWrapper}>
              <Message
                onClose={() => {
                  remove(messageKey);
                  onClose?.();
                }}
                {...restConfig}
              />
            </div>
          ))}
        </div>
      </Portal>
    );
  },
);

MessageContainer.displayName = 'MessageContainer';
