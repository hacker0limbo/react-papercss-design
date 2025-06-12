import { useMemo } from 'react';

/**
 * @reference https://github.com/Tencent/tdesign-react/blob/develop/packages/components/hooks/useDefaultProps.ts
 * 将原始 props 和默认 props 合并, 用于解决 defaultProps API 会废弃的问题
 */
export default function useDefaultProps<T>(
  originalProps: T,
  defaultProps: Record<PropertyKey, any>,
): T {
  return useMemo<T>(() => {
    const props = { ...originalProps };
    Object.keys(defaultProps).forEach((key) => {
      // @ts-ignore
      if (props[key] === undefined) {
        // @ts-ignore
        props[key] = defaultProps[key];
      }
    });
    return props;
  }, [originalProps, defaultProps]);
}
