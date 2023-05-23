import React from 'react';
import { BaseComponentProps } from '../types';

export interface TabPaneProps extends BaseComponentProps {
  forceRender?: boolean;
  tabKey?: React.Key;
  title?: React.ReactNode;
  children?: React.ReactNode;
}

export const TabPane: React.FC<TabPaneProps> = () => {
  return null;
};
