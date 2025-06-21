---
title: Form
group:
  title: Data Entry
  order: 4
toc: content
---

# Form

A collection of controls for data entry

Reference: [Forms](https://www.getpapercss.com/docs/components/forms/)

:::info{title="Styling"}
PaperCSS form component styles are all written under `.form-group`. For decoupling purposes, all form components have their styles extracted or partially overridden (for example, a notable difference is that when used standalone, form components are `display: inline-block` instead of `block`). However, when used with `Form.Group`, the styling remains consistent with PaperCSS without any modifications.
:::

Basic Form usage: A `Form` contains multiple `Form.Group`s, each `Form.Group` contains a set of `Label` and form components. You can use `controlId` to associate `Label` with form components. A default one will be provided if not specified.

```tsx | pure
return (
  <Form>
    <Form.Group>
      <Label>Input</Label>
      <Input />
    </Form.Group>
    <Form.Group controlId="customId">
      <Label>Switch</Label>
      <Switch />
    </Form.Group>
  </Form>
);
```

## Examples

<code src="./demos/FormBase.tsx" title="Basic" description="Display of all form elements"></code>

## Comparison

The `Form` component is just a wrapper around the native `form` element with no other changes.

## API

### Form

| Property | Description                                | Type      | Default |
| -------- | ------------------------------------------ | --------- | ------- |
| disabled | Whether to disable all form child elements | `boolean` | -       |

Equivalent to the native `form` element, supports all `form` attributes.

### FormGroup

| Property  | Description                                                                                    | Type                  | Default                                            |
| --------- | ---------------------------------------------------------------------------------------------- | --------------------- | -------------------------------------------------- |
| controlId | Provides `id` attribute for `Label` and form elements, defaults to a unique id if not provided | `string \| undefined` | [uniqId](https://lodash.com/docs/4.17.15#uniqueId) |
| as        | Element to render, defaults to `div`, consider using `fieldset`                                | `React.ElementType`   | `div`                                              |
