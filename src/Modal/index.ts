import { Modal, ModalProps } from './Modal';
import { ModalFuncProps, open } from './open';

export type { ModalFuncProps, ModalProps };

const CombinedModal = Object.assign(Modal, {
  open,
});

export { CombinedModal as Modal };
