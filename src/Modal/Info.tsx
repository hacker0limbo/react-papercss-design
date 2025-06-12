import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot, Root } from 'react-dom/client';
import { Button } from '../Button';
import { Modal, ModalProps } from './Modal';

// reference: https://juejin.cn/post/7385215732819689506
const MARK = '__rpd_react_root__';

// 虚拟的 DocumentFragment 类型, 并不存在于 DOM 中, 仅用于 React 18 及以上版本的渲染
type VirtualDocumentFragment = DocumentFragment & { [MARK]?: Root };

// 判断是否是 React 18 以及以上
function isReact18() {
  return Number(React.version.split('.')[0]) >= 18;
}

// 创建用于渲染 Modal 的容器, react 18 以上使用虚拟的 DocumentFragment, 18 以下使用真实的 div 元素
function createContainer(): HTMLElement | VirtualDocumentFragment {
  if (isReact18()) {
    return document.createDocumentFragment() as VirtualDocumentFragment;
  } else {
    const div = document.createElement('div');
    document.body.appendChild(div);
    return div;
  }
}

// 渲染 React 组件到指定容器, 18 及以上使用 createRoot, 18 以下使用 ReactDOM.render
function reactRender(node: React.ReactElement, container: HTMLElement | VirtualDocumentFragment) {
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
function reactUnmount(container: HTMLElement | VirtualDocumentFragment) {
  if (isReact18()) {
    (container as VirtualDocumentFragment)[MARK]?.unmount();
  } else {
    // eslint-disable-next-line react/no-deprecated
    ReactDOM.unmountComponentAtNode(container as HTMLElement);
    (container as HTMLElement).remove?.();
  }
}

// 暴露给外部用户使用的类型
export type ModalFuncProps = Omit<ModalProps, 'open' | 'onOk' | 'onCancel'> & {
  onOk?: () => void;
};

// 内部使用, 增加 open 和 close 方法
type InternalModalConfig = ModalFuncProps & {
  open: boolean;
  close: () => void;
};

// 基本原理为: 创建一个并不在 DOM 树中的 DocumentFragment，然后通过 React 的 root.render 将 Modal 组件渲染在该 DocumentFragment 中
// 由于使用了 Portal, 因此虽然这个 DocumentFragment 不在 DOM 中, 但 React 仍然可以将 Modal 渲染到 document.body 中
// 关闭时将 open 状态置为 false, 并重新调用 render 方法, 这样就可以实现关闭 Modal 的效果, 关闭时需要卸载组件
export function info(config: ModalFuncProps) {
  const container = createContainer();

  // eslint-disable-next-line
  let currentConfig: InternalModalConfig = { ...config, close, open: true };
  let timeoutId: ReturnType<typeof setTimeout>;

  function render(props: InternalModalConfig) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      const { close, children, ...rest } = props;

      reactRender(
        <Modal
          {...rest}
          onCancel={() => {
            close();
          }}
          onOk={() => {}}
          maskClosable={false}
          footer={
            <Button
              type="secondary"
              onClick={() => {
                close();
              }}
            >
              Ok
            </Button>
          }
        >
          {children}
        </Modal>,
        container,
      );
    });
  }

  // 关闭 Modal 的方法, 将 open 状态置为 false, 并重新渲染组件, 同时异步卸载组件
  function close() {
    currentConfig = { ...currentConfig, open: false };
    render(currentConfig);

    setTimeout(() => {
      // 由于关闭为手动关闭, 因此不会自动卸载组件, 需要手动调用 onOk 回调
      currentConfig.onOk?.();
      reactUnmount(container);
    });
  }

  render(currentConfig);
}
