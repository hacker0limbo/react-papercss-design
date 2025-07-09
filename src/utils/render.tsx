import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot, Root } from 'react-dom/client';

// reference: https://juejin.cn/post/7385215732819689506
const MARK = '__rpd_react_root__';

// 虚拟的 DocumentFragment 类型, 并不存在于 DOM 中, 仅用于 React 18 及以上版本的渲染
type VirtualDocumentFragment = DocumentFragment & { [MARK]?: Root };

// 判断是否是 React 18 以及以上
export function isReact18() {
  return Number(React.version.split('.')[0]) >= 18;
}

// 创建用于渲染 Modal 的容器, react 18 以上使用虚拟的 DocumentFragment, 18 以下使用真实的 div 元素
export function createContainer(): HTMLElement | VirtualDocumentFragment {
  if (isReact18()) {
    return document.createDocumentFragment() as VirtualDocumentFragment;
  } else {
    const div = document.createElement('div');
    document.body.appendChild(div);
    return div;
  }
}

// 渲染 React 组件到指定容器, 18 及以上使用 createRoot, 18 以下使用 ReactDOM.render
export function reactRender(
  node: React.ReactElement,
  container: HTMLElement | VirtualDocumentFragment,
) {
  if (isReact18()) {
    if (!(MARK in container)) {
      (container as VirtualDocumentFragment)[MARK] = createRoot(
        container as VirtualDocumentFragment,
      );
    }
    (container as VirtualDocumentFragment)[MARK]!.render(node);
  } else {
    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(node, container as HTMLElement);
  }
}

// 卸载 React 组件, 18 及以上使用 unmount, 18 以下使用 unmountComponentAtNode
export function reactUnmount(container: HTMLElement | VirtualDocumentFragment) {
  if (isReact18()) {
    (container as VirtualDocumentFragment)[MARK]?.unmount();
  } else {
    // eslint-disable-next-line react/no-deprecated
    ReactDOM.unmountComponentAtNode(container as HTMLElement);
    (container as HTMLElement).remove?.();
  }
}
