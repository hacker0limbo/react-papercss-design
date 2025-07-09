import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export type PortalProps = {
  children: React.ReactNode;
  // element to append the portal to, can be a function that returns an HTMLElement or null, default is document.body
  container?: HTMLElement | (() => HTMLElement | null);
  id?: string;
};

/**
 * Portal component to render children into a different part of the DOM tree.
 */
export const Portal = ({ children, container, id = 'portal-root' }: PortalProps) => {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const getContainer = (): HTMLElement => {
      if (typeof container === 'function') {
        return container() ?? document.body;
      }
      return container ?? document.body;
    };

    const node = document.createElement('div');
    node.setAttribute('id', id);
    getContainer().appendChild(node);
    setMountNode(node);

    return () => {
      node.parentNode?.removeChild(node);
      setMountNode(null);
    };
  }, [container, id]);

  if (!mountNode) return null;

  return createPortal(children, mountNode);
};
