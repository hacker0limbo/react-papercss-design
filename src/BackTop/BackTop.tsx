import { useScroll } from 'ahooks';
import clsx from 'clsx';
import { forwardRef, RefObject, useImperativeHandle, useMemo, useRef } from 'react';
import { createUseStyles } from 'react-jss';

export type BackTopProps = {
  visibilityHeight?: number;
  target?: RefObject<HTMLElement>;
} & React.ComponentPropsWithoutRef<'div'>;

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
    '&.paper-btn': {
      padding: '0.6em 1em',
      borderTopLeftRadius: '185px 160px',
      borderTopRightRadius: '200px 195px',
      borderBottomRightRadius: '160px 195px',
      borderBottomLeftRadius: '185px 190px',
      margin: '1rem',
    },
  },
});

/**
 * BackTop 组件
 * @reference https://github.com/ant-design/ant-design/blob/4.x-stable/components/back-top/index.tsx
 * @reference https://github.com/Tencent/tdesign-react/blob/develop/packages/components/back-top/BackTop.tsx
 */
export const BackTop = forwardRef<HTMLDivElement, BackTopProps>((props, ref) => {
  const { visibilityHeight = 400, target, onClick, className, children, ...restProps } = props;
  const backTopRef = useRef<HTMLDivElement>(null);

  // 由于 react 里面的 ref 存在两种调用方式, 需要做一层包装, 参考: https://stackoverflow.com/a/76739143/12733140
  useImperativeHandle(ref, () => backTopRef.current as HTMLDivElement);
  const defaultTarget =
    backTopRef?.current && backTopRef?.current?.ownerDocument
      ? backTopRef?.current?.ownerDocument
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
      {...restProps}
    >
      <span className={clsx(classes.backTopInner, 'paper-btn')}>{children ?? '^'}</span>
    </div>
  ) : null;
});
