import { uniq, uniqueId } from 'lodash-es';
import React, { useMemo } from 'react';
import { useCollapseContext } from './CollapseContext';

export type CollapseHeaderProps = {
  id: string;
  collapseKey: React.Key;
  accordion?: boolean;
  children?: React.ReactNode;
};

export const CollapseHeader = ({ children, collapseKey, id, accordion }: CollapseHeaderProps) => {
  const { activeKey, setActiveKey } = useCollapseContext();
  const checked = useMemo(() => {
    if (Array.isArray(activeKey)) {
      return activeKey.includes(collapseKey);
    }
    return activeKey === collapseKey;
  }, [activeKey, collapseKey]);
  const collapsibleId = uniqueId('collapsible-');

  return (
    <>
      <input
        id={collapsibleId}
        type={accordion ? 'radio' : 'checkbox'}
        name={id}
        checked={checked}
        onChange={(e) => {
          if (e.target.checked) {
            // 如果选中
            if (accordion) {
              // 如果是手风琴模式, 只能展示一个
              if (Array.isArray(activeKey)) {
                setActiveKey([collapseKey]);
              } else {
                setActiveKey(collapseKey);
              }
            } else {
              // 否则允许展示多个, 理论上展示多个的时候应该是一个数组
              setActiveKey((prevKey) => uniq([...(prevKey as React.Key[]), collapseKey]));
            }
          } else {
            // 如果没有被选中
            if (Array.isArray(activeKey)) {
              setActiveKey((prevKey) =>
                (prevKey as React.Key[]).filter((key) => key !== collapseKey),
              );
            } else {
              setActiveKey(undefined);
            }
          }
        }}
      />
      <label htmlFor={collapsibleId}>{children}</label>
    </>
  );
};
