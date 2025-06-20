---
title: Select
demo:
  cols: 2
group:
  title: 数据录入
  order: 4
toc: content
---

# Select 选择器

下拉选择器

## 示例

<code src="./demos/SelectBase.tsx" title="基本使用" description="基本使用, 默认选中第一个选项"></code>
<code src="./demos/SelectControlled.tsx" title="受控" description="使用`value`和`onChange`进行受控"></code>
<code src="./demos/SelectDisabled.tsx" title="禁用" description="禁用下拉框"></code>
<code src="./demos/SelectConfig.tsx" title="可配置" description="使用`options`进行配置化"></code>

## API

### Select

| 参数         | 说明                 | 类型                                      | 默认值 |
| ------------ | -------------------- | ----------------------------------------- | ------ |
| value        | 受控下下拉框内容     | `string`                                  | -      |
| defaultValue | 非受控下下拉框内容   | `string`                                  | -      |
| onChange     | 下拉框内容变化的回调 | `(value: string, e: ChangeEvent) => void` | -      |
| disabled     | 是否禁用             | `boolean`                                 | -      |
| options      | 配置化写法           | `{ label: string, value: string }[]	`      | -      |

### SelectOption

支持`<option>`标签所有的属性. 注意如果使用`items`进行配置使用的时候, 内容使用`label`属性
