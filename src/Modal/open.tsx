import { Button } from '../Button';
import { createContainer, reactRender, reactUnmount } from '../utils/render';
import { Modal, ModalProps } from './Modal';

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
export function open(config: ModalFuncProps) {
  const container = createContainer();

  // eslint-disable-next-line
  let currentConfig: InternalModalConfig = { ...config, close, open: true };
  let timeoutId: ReturnType<typeof setTimeout>;

  function render(props: InternalModalConfig) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      const { close, children, okText, ...rest } = props;

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
              {okText || 'Ok'}
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
