---
title: Message
group:
  title: 反馈
  order: 6
toc: content
---

# Message 全局提示

全局展示操作反馈信息。

## 示例

<code src="./demos/MessageBase.tsx" title="基本" description="展示全局消息反馈" iframe="300"></code>
<code src="./demos/MessageDuration.tsx" title="自定义持续时间" description="可以修改`duration`来自定义消失时间, 给`0`时会一直存在" iframe="300"></code>
<code src="./demos/MessageDismissible.tsx" title="可关闭的消息" description="使用`dismissible`属性让消息可关闭" iframe="300"></code>
<code src="./demos/MessageType.tsx" title="不同类型的消息" description="使用`type`或者其他静态方法来展示不同类型消息" iframe="300"></code>
<code src="./demos/MessageDestroy.tsx" title="销毁消息" description="使用`.destroy`方法销毁一条或多条消息" iframe="300"></code>
<code src="./demos/MessageConfig.tsx" title="全局配置" description="使用`.config`统一配置消息" iframe="300"></code>

## API

`Message`组件是基于`Alert`组件进行封装的, 所以样式会比较相似.

### 打开消息

组件提供了一些静态方法用于打开一个消息提示, 并且都返回该消息的唯一`messageKey`, 你可以使用该`messageKey`来关闭该消息。

- `message.open(config)`
- `message.info(config)`
- `message.success(config)`
- `message.danger(config)`
- `message.error(config)` (alias for `danger`)
- `message.warning(config)`
- `message.warn(config)` (alias for `warning`)

config 对象属性如下：

| 参数        | 说明                                                         | 类型                                                   | 默认值    |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------ | --------- |
| type        | 提示样式                                                     | `primary`, `secondary`, `success`, `warning`, `danger` | `primary` |
| content     | 提示内容                                                     | `React.ReactNOde`                                      | -         |
| onClose     | 关闭按钮点击时触发                                           | `(e: MouseEvent) => void`                              | -         |
| duration    | 几秒后自动关闭, 默认为 3 秒, 设置为`0`或者`null`不会自动关闭 | `number \| null`                                       | `3`       |
| dismissible | 是否可关闭                                                   | `boolean`                                              | -         |
| closeLabel  | 关闭按钮的文本                                               | `React.ReactNode`                                      | `X`       |
| messageKey  | 提示的唯一`key`, 不指定会默认生成                            | `string \| number`                                     | `uuid`    |

### 关闭消息

你可以使用`message.destroy(messageKey)`方法来关闭指定的消息, 如果不传入`messageKey`则会关闭所有消息。

### 全局配置

可以使用`message.config(options)`方法来设置全局配置, 该配置会应用到所有的消息中, 默认配置如下:

```ts
message.config({
  duration: 3,
  align: 'center',
  maxCount: undefined,
  dismissible: undefined,
});
```

`options` 对象属性如下:

| 参数        | 说明                                                         | 类型                      | 默认值   |
| ----------- | ------------------------------------------------------------ | ------------------------- | -------- |
| duration    | 几秒后自动关闭, 默认为 3 秒, 设置为`0`或者`null`不会自动关闭 | `number \| null`          | `3`      |
| align       | 消息位置                                                     | `left \| right \| center` | `center` |
| maxCount    | 最大显示的消息数量, 超过时最早的消息会被自动关闭             | `number`                  | -        |
| dismissible | 是否可关闭                                                   | `boolean`                 | -        |
