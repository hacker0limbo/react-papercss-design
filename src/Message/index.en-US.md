---
title: Message
group:
  title: Feedback
  order: 6
toc: content
---

# Message

Display global feedback messages for user operations.

## Examples

<code src="./demos/MessageBase.tsx" title="Basic" description="Display global message feedback" iframe="300"></code>
<code src="./demos/MessageDuration.tsx" title="Custom Duration" description="Customize the disappear time by modifying `duration`. Set to `0` to persist indefinitely" iframe="300"></code>
<code src="./demos/MessageDismissible.tsx" title="Dismissible Messages" description="Use the `dismissible` property to make messages closable" iframe="300"></code>
<code src="./demos/MessageType.tsx" title="Message Types" description="Use `type` or other static methods to display different types of messages" iframe="300"></code>
<code src="./demos/MessageDestroy.tsx" title="Destroy Messages" description="Use the `.destroy` method to destroy one or multiple messages" iframe="300"></code>
<code src="./demos/MessageConfig.tsx" title="Global Configuration" description="Use `.config` to configure messages globally" iframe="300"></code>

## API

The `Message` component is built on top of the `Alert` component, so it has similar styling.

### Opening Messages

The component provides static methods to open message notifications. All methods return a unique `messageKey` that can be used to close the specific message.

- `message.open(config)`
- `message.info(config)`
- `message.success(config)`
- `message.danger(config)`
- `message.error(config)` (alias for `danger`)
- `message.warning(config)`
- `message.warn(config)` (alias for `warning`)

The config object properties are as follows:

| Property    | Description                                                             | Type                                                   | Default   |
| ----------- | ----------------------------------------------------------------------- | ------------------------------------------------------ | --------- |
| type        | Message style                                                           | `primary`, `secondary`, `success`, `warning`, `danger` | `primary` |
| content     | Message content                                                         | `React.ReactNode`                                      | -         |
| onClose     | Callback when close button is clicked                                   | `(e: MouseEvent) => void`                              | -         |
| duration    | Auto-close delay in seconds. Set to `0` or `null` to disable auto-close | `number \| null`                                       | `3`       |
| dismissible | Whether the message is closable                                         | `boolean`                                              | -         |
| closeLabel  | Text for the close button                                               | `React.ReactNode`                                      | `X`       |
| messageKey  | Unique key for the message. Auto-generated if not specified             | `string \| number`                                     | `uuid`    |

### Closing Messages

Use the `message.destroy(messageKey)` method to close a specific message. If no `messageKey` is provided, all messages will be closed.

### Global Configuration

Use the `message.config(options)` method to set global configuration that applies to all messages. Default configuration:

```ts
message.config({
  duration: 3,
  align: 'center',
  maxCount: undefined,
  dismissible: undefined,
});
```

The `options` object properties are as follows:

| Property    | Description                                                                                        | Type                      | Default  |
| ----------- | -------------------------------------------------------------------------------------------------- | ------------------------- | -------- |
| duration    | Auto-close delay in seconds. Set to `0` or `null` to disable auto-close                            | `number \| null`          | `3`      |
| align       | Message position                                                                                   | `left \| right \| center` | `center` |
| maxCount    | Maximum number of messages to display. Earlier messages will be automatically closed when exceeded | `number`                  | -        |
| dismissible | Whether messages are closable                                                                      | `boolean`                 | -        |
