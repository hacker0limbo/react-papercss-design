# TODO List

- [x] 使用 JSS 作为 CSS 方案
- [x] 使用 clsx 替代 classnames
- [x] 导出 props 类型
- [x] demo 使用 React.FC
- [x] 使用 React.ComponentsPropsWithoutRef 暴露原生的属性
- [x] 主题, 可配置两种主题, 暴露主题 tokens, 联合 dumi 的 API 进行控制
- [x] 增加 displayName(由于使用了 forwardRef, 加上能更好的在 react dev tools 里显示名字利于调试)
- [ ] 国际化支持, 需要英文版本
- [ ] 给所有组件内部所有元素增加 className 声明. 即使这个 className 是空的(方便用户通过选择器选择到组件底层的元素自定义样式)
- [ ] props 注释使用英文
- [x] 使用 lodash-es 替代 lodash 减少打包体积
- [x] 使用 np 来发布包
- [x] github actions 自动发布文档
- [] i18n, modal, pagination 组件
- [] locale 在 iframe 下存在问题: https://github.com/umijs/dumi/issues/2291
