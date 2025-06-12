import React from 'react';

export type TabPaneItemProps = {
  /**
   * tabItem 的唯一标识
   */
  tabKey?: React.Key;
  /**
   * tabItem 的标题
   */
  title?: string;
  /**
   * tabItem 的内容
   */
  children?: React.ReactNode;
};

export type TabPaneProps = TabPaneItemProps & React.ComponentPropsWithoutRef<'div'>;

/**
 * TabPan 组件, 仅仅对外暴露 props 用于用户使用, 不会渲染任何内容, 类似一个中间层
 * @returns
 */
export const TabPane: React.FC<TabPaneProps> = () => {
  return null;
};

TabPane.displayName = 'TabPane';
