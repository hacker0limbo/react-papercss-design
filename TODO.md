# TODO List

- [x] 使用 JSS 作为 CSS 方案
- [x] 使用 clsx 替代 classnames
- [x] 导出 props 类型
- [x] demo 使用 React.FC
- [x] 使用 React.ComponentsPropsWithoutRef 暴露原生的属性
- [ ] 主题, 可配置两种主题, 暴露主题 tokens, 联合 dumi 的 API 进行控制
- [x] 增加 displayName(由于使用了 forwardRef, 加上能更好的在 react dev tools 里显示名字利于调试)
- [ ] 国际化支持, 需要英文版本
- [ ] 给所有组件内部所有元素增加 className 声明. 即使这个 className 是空的(方便用户通过选择器选择到组件底层的元素自定义样式)
- [ ] props 注释使用英文
- [x] 使用 lodash-es 替代 lodash 减少打包体积
- [ ] 使用 np 来发布包
- [ ] github actions 自动发布文档

注意点:

- 项目不使用 less 作为样式库, 因为 father 暂时不支持[编译 less](https://github.com/umijs/father/issues/600), 除非用户使用这个组件库的时候配置了编译 less 的功能.
- 不手动安装 papercss, 理由同上, 构建产物为 bundless 是不会处理样式文件的, 需要用户在使用组件库的时候手动进行安装并引入, 类似 antd4 官方文档里写的一样
- 起步

一些组件库的参考:

- https://www.radix-ui.com/primitives
- https://github.com/Oli8/spaper

手绘风格的 icons 资源:

- https://fxaeberhard.github.io/handdrawn.css/
- https://github.com/nikhilol/hand-drawn-icons
