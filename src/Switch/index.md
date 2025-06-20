---
title: Switch
demo:
  cols: 2
group:
  title: 数据录入
  order: 4
toc: content
---

# Switch 开关

开关选择器。

## 示例

<code src="./demos/SwitchBase.tsx" title="基本" description="基本使用"></code>
<code src="./demos/SwitchType.tsx" title="不同类型" description="使用`type`和`round`渲染不同类型的开关"></code>
<code src="./demos/SwitchControlled.tsx" title="受控" description="使用`checked`和`onChange`进行受控"></code>
<code src="./demos/SwitchDisabled.tsx" title="禁用" description="使用`disabled`禁用开关"></code>
<code src="./demos/SwitchTileBase.tsx" title="Tile 组件" description="使用`Switch.Tile`展示可翻转的开关"></code>
<code src="./demos/SwitchTileType.tsx" title="类型" description="使用`checkedType`和`unCheckedType`给定不同的类型"></code>
<code src="./demos/SwitchTileControlled.tsx" title="受控" description="使用`checked`和`onChange`进行受控"></code>

## 比较

由于`Switch`组件是单独使用的, 他和在`.form-group`下表现形式不同, 他的布局属性被设置成了`display: inline-block`而不是`display: block`

## API

### Switch

| 参数           | 说明                 | 类型                                         | 默认值      |
| -------------- | -------------------- | -------------------------------------------- | ----------- |
| type           | 开关类型             | `'default' \| 'inline'`                      | `'default'` |
| checked        | 受控下开关是否选中   | `boolean`                                    | -           |
| defaultChecked | 非受控下开关是否选中 | `boolean`                                    | `false`     |
| disabled       | 是否禁用             | `boolean`                                    | -           |
| round          | 是否圆角             | `boolean`                                    | -           |
| onChange       | 状态切换回调         | `(checked: boolean, e: ChangeEvent) => void` | -           |

### SwitchTile

| 参数             | 说明                 | 类型                                                             | 默认值      |
| ---------------- | -------------------- | ---------------------------------------------------------------- | ----------- |
| checked          | 受控下开关是否选中   | `boolean`                                                        | -           |
| defaultChecked   | 非受控下开关是否选中 | `boolean`                                                        | `false`     |
| checkedContent   | 选中时内容           | `React.ReactNode`                                                | -           |
| checkedType      | 选中时背景类型       | `'primary'`, `'secondary'`, `'success'`, `'warning'`, `'danger'` | `'primary'` |
| unCheckedContent | 未选中时内容         | `React.ReactNode`                                                | -           |
| unCheckedType    | 未选中时背景类型     | `'primary'`, `'secondary'`, `'success'`, `'warning'`, `'danger'` | -           |
| onChange         | 状态切换回调         | `(checked: boolean, e: ChangeEvent) => void`                     | -           |
| bordered         | 是否显示边框         | `boolean`                                                        | `true`      |
