---
title: 使用 TypeScript
toc: content
order: 2
---

# 使用 TypeScript

所有的组件均使用`TypeScript`书写并且导出相应的类型. 你可以通过手动导入组件`props`来获取某个组件具体的`props`类型. 例如:

```ts | pure
import type { ButtonProps } from 'react-papercss-design';
```

同时, 所有的组件均使用了`forwardRef`转发, 组件除了文档上标注的`props`之外, 也支持所有组件本身的`props`, 例如`onClick`等

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
