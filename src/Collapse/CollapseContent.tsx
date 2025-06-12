import React, { useMemo } from 'react';
import { useCollapseContext } from './CollapseContext';

export type CollapseContentProps = {
  collapseKey: React.Key;
  destroyOnHidden?: boolean;
  children?: React.ReactNode;
};

export const CollapseContent = ({
  children,
  collapseKey,
  destroyOnHidden,
}: CollapseContentProps) => {
  const { activeKey } = useCollapseContext();
  const checked = useMemo(() => {
    if (Array.isArray(activeKey)) {
      return activeKey.includes(collapseKey);
    }
    return activeKey === collapseKey;
  }, [activeKey, collapseKey]);

  if (!checked && destroyOnHidden) {
    return null;
  }

  return <div className="collapsible-body">{children}</div>;
};
