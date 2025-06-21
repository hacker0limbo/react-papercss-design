---
title: Use in TypeScript
toc: content
order: 2
---

# Use in TypeScript

All components are written in `TypeScript` and export corresponding types. You can manually import component `props` to get the specific `props` type of a component. For example:

```ts | pure
import type { ButtonProps } from 'react-papercss-design';
```

Additionally, all components use `forwardRef` for `ref` forwarding. Components support all component's native `props` and `events`, such as `onClick`, etc.

```jsx | pure
import { Radio } from 'react-papercss-design';

export default () => {
  return (
    <Radio
      // forwarding ref to <radio> component
      ref={ref}
      // radio original props
      name="radio"
      onClick={(e) => {
        console.log('clicked radio', e);
      }}
    >
      Radio
    </Radio>
  );
};
```
