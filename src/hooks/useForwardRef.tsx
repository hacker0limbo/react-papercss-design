import { ForwardedRef, useEffect, useRef } from 'react';

/**
 * 包装 ref, 不用考虑 ref 是一个函数还是一个对象
 * @reference https://stackoverflow.com/a/73748435/12733140
 */
const useForwardRef = <T,>(ref: ForwardedRef<T>, initialValue: any = null) => {
  const targetRef = useRef<T>(initialValue);

  useEffect(() => {
    if (!ref) return;

    if (typeof ref === 'function') {
      ref(targetRef.current);
    } else {
      ref.current = targetRef.current;
    }
  }, [ref]);

  return targetRef;
};

export default useForwardRef;
