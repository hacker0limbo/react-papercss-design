---
title: Label
demo:
  cols: 2
group:
  title: Data Entry
  order: 4
toc: content
---

# Label

A control identifier used to associate with input components

## Examples

<code src="./demos/LabelBase.tsx" title="Basic" description="Use `htmlFor` to associate with `input` components"></code>
<code src="./demos/LabelFormGroup.tsx" title="Within Form.Group" description="When used within `Form.Group`, `htmlFor` can be omitted and will default to using the `controlId` from `Form.Group`"></code>

## API

### Label

| Property | Description                                                                                                      | Type                  | Default |
| -------- | ---------------------------------------------------------------------------------------------------------------- | --------------------- | ------- |
| htmlFor  | The `for` attribute of `label`. If not specified and exists within `Form.Group`, will use `controlId` as default | `string \| undefined` | -       |

Accepts all other props of the `<label>` component.
