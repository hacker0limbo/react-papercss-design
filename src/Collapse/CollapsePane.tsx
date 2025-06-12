import React from 'react';

export type CollapsePaneItemProps = {
  collapseKey: string;
  header?: React.ReactNode;
  children?: React.ReactNode;
};

export type CollapsePaneProps = CollapsePaneItemProps & React.ComponentPropsWithoutRef<'div'>;

/**
 * CollapsePane Component
 */
export const CollapsePane: React.FC<CollapsePaneProps> = () => {
  return null;
};

CollapsePane.displayName = 'CollapsePane';
