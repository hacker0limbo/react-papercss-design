import React, { useId, useMemo } from 'react';
import { useTabsContext } from './TabsContext';

export interface TabsTitleProps {
  title?: React.ReactNode;
  onChange?: (activeKey: React.Key) => void;
  tabKey?: React.Key;
}

export const TabsTitle = ({ tabKey, onChange, title }: TabsTitleProps) => {
  const { activeKey, setActiveKey } = useTabsContext();
  const id = useId();
  const checked = useMemo(() => activeKey === tabKey, [activeKey, tabKey]);

  return (
    <>
      <input id={`tab${id}`} type="radio" name="tabs" readOnly />
      <label
        // 这里由于 papercss 的原因需要根据是否为选中的 tab 手动添加选中样式
        style={
          checked
            ? {
                color: 'var(--primary)',
                borderBottomColor: 'var(--secondary)',
                borderBottomStyle: 'solid',
                borderBottomWidth: '3px',
              }
            : {}
        }
        htmlFor={`tab${id}`}
        onClick={() => {
          if (tabKey) {
            setActiveKey(tabKey);
            onChange?.(tabKey);
          }
        }}
      >
        {title}
      </label>
    </>
  );
};
