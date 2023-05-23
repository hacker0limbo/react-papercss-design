import React, { useEffect, useState } from 'react';

/**
 * 参考: https://zhuanlan.zhihu.com/p/625449484
 * 本质上调用的时候虽然存在多个 localState, 但是 setGlobalState 会以遍历的方式强制对所有的 localState 进行 setLocalState 调用
 * 保证所有的 localState 进行同步. 虽然 localState 存在多处, 但是保持是一致的
 * @param initialState
 * @returns useGlobalState
 * @example
 * const useGlobalState = createGlobalState(0)
 * const [state, setState] = useGlobalState()
 */
export function createGlobalState<S>(initialState?: S | (() => S)) {
  // 1. 使用闭包存
  //    - global setState function
  //    - 所有注册的 localStateSetter
  let localStateSetters: Array<React.Dispatch<any>> = [];
  const setGlobalState = (newState: S | (() => S)) => {
    localStateSetters.forEach((setter) => setter(newState));
  };

  return () => {
    const [localState, setLocalState] = useState(initialState);
    useEffect(() => {
      // 2. 注册当前 setState
      if (!localStateSetters.includes(setLocalState)) {
        localStateSetters.push(setLocalState);
      }

      // 3. 清理 (clean up) 销毁的 setter
      return () => {
        localStateSetters = localStateSetters.filter((setter) => setter !== setLocalState);
      };
    }, []);
    // 4. 返回当前 state 和全局 setState
    return [localState, setGlobalState];
  };
}
