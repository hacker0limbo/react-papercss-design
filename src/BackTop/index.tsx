import { useThrottleFn } from 'ahooks';
import { forwardRef, useEffect, useState } from 'react';
import { useForwardRef } from '../hooks';
import { BaseComponentProps } from '../types';

export interface BackTopProps extends BaseComponentProps {
  duration?: number;
  visibilityHeight?: number;
  target?: () => HTMLElement | Document | Window;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const BackTop = forwardRef<HTMLDivElement, BackTopProps>((props, ref) => {
  const { duration = 450, visibilityHeight = 400, target, onClick, className, style } = props;
  const forwardedRef = useForwardRef<HTMLDivElement>(ref);
  const [visible, setVisible] = useState<boolean>(visibilityHeight === 0);

  const getDefaultTarget = (): HTMLElement | Document | Window =>
    forwardedRef?.current && forwardedRef?.current?.ownerDocument
      ? forwardedRef.current.ownerDocument
      : window;

  const getContainer = target || getDefaultTarget;

  const { run: handleScroll } = useThrottleFn(
    (e: React.UIEvent<HTMLElement, UIEvent> | { target: any }) => {
      if (e.target.scrollTop > visibilityHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    },
    {
      wait: duration,
    },
  );

  useEffect(() => {
    const container = getContainer();
    handleScroll({ target: container });
    container?.addEventListener('scroll', handleScroll);
    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, [getContainer, handleScroll]);

  return visible ? (
    <div
      className={className}
      style={style}
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        const container = getContainer();
        if (container instanceof Document) {
          (container as Document).documentElement.scrollTo({ behavior: 'smooth', top: 0 });
        } else {
          (container as HTMLElement).scrollTo({ behavior: 'smooth', top: 0 });
        }
        onClick?.(e);
      }}
    >
      BackTop
    </div>
  ) : null;
});

export default BackTop;
