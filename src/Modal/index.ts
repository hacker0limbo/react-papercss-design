import { info, ModalFuncProps } from './Info';
import { Modal, ModalProps } from './Modal';

export type { ModalFuncProps, ModalProps };

const CombinedModal = Object.assign(Modal, {
  info,
});

export { CombinedModal as Modal };
