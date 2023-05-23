import { useScroll } from 'ahooks';
import clsx from 'clsx';
import { forwardRef, RefObject, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { useForwardRef } from '../hooks';
import { BaseComponentProps } from '../types';

export interface BackTopProps extends BaseComponentProps {
  visibilityHeight?: number;
  target?: RefObject<HTMLElement>;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  children?: React.ReactNode;
}

const useStyles = createUseStyles({
  backTop: {
    opacity: 1,
    display: 'inline-block',
    padding: '1em',
    position: 'fixed',
    bottom: '1em',
    right: '1em',
  },
  backTopInner: {
    padding: '0.6em 1em !important',
    borderTopLeftRadius: '185px 160px !important',
    borderTopRightRadius: '200px 195px !important',
    borderBottomRightRadius: '160px 195px !important',
    borderBottomLeftRadius: '185px 190px !important',
  },
});

const BackTop = forwardRef<HTMLDivElement, BackTopProps>((props, ref) => {
  const { visibilityHeight = 400, target, onClick, className, style, children } = props;
  const forwardedRef = useForwardRef<HTMLDivElement>(ref);
  const defaultTarget =
    forwardedRef?.current && forwardedRef?.current?.ownerDocument
      ? forwardedRef?.current?.ownerDocument
      : window.document;
  const container = target?.current || defaultTarget;
  const position = useScroll(container as any);
  const visible = useMemo(() => {
    return (position?.top as number) > visibilityHeight;
  }, [position, visibilityHeight]);
  const classes = useStyles();

  return visible ? (
    <div
      className={clsx(classes.backTop, className)}
      style={style}
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        if (container instanceof Document) {
          (container as Document).documentElement?.scrollTo({ behavior: 'smooth', top: 0 });
        } else {
          (container as HTMLElement)?.scrollTo({ behavior: 'smooth', top: 0 });
        }
        onClick?.(e);
      }}
    >
      <span className={clsx(classes.backTopInner, 'paper-btn margin')}>{children ?? '^'}</span>
    </div>
  ) : null;
});

export default BackTop;
