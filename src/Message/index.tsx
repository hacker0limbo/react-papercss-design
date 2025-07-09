import { createRef } from 'react';
import { createContainer, reactRender } from '../utils/render';
import { type MessageConfigProps, type MessageHandle, MessageContainer } from './MessageContainer';

type MessageHandleWithoutType = (
  config: Omit<MessageConfigProps, 'type'>,
) => ReturnType<MessageHandle['add']>;

export type MessageInstance = {
  open: MessageHandle['add'];
  info: MessageHandleWithoutType;
  success: MessageHandleWithoutType;
  warning: MessageHandleWithoutType;
  // alias for warning
  warn: MessageHandleWithoutType;
  danger: MessageHandleWithoutType;
  // alias for danger
  error: MessageHandleWithoutType;
  destroy: MessageHandle['remove'];
  config: MessageHandle['config'];
};

const messageRef = createRef<MessageHandle>();

const container = createContainer();

reactRender(<MessageContainer ref={messageRef} />, container);

export const message: MessageInstance = {
  open: (config) => {
    return messageRef.current!.add(config);
  },
  info: (config) => {
    return messageRef.current!.add({ type: 'secondary', ...config });
  },
  success: (config) => {
    return messageRef.current!.add({ type: 'success', ...config });
  },
  warning: (config) => {
    return messageRef.current!.add({ type: 'warning', ...config });
  },
  warn: (config) => {
    return messageRef.current!.add({ type: 'warning', ...config });
  },
  danger: (config) => {
    return messageRef.current!.add({ type: 'danger', ...config });
  },
  error: (config) => {
    return messageRef.current!.add({ type: 'danger', ...config });
  },
  destroy: (key) => {
    messageRef.current?.remove(key);
  },
  config: (newConfig) => {
    messageRef.current?.config(newConfig);
  },
};

export type { MessageConfigProps };
