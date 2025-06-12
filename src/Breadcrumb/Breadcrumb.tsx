import clsx from 'clsx';
import React, { forwardRef, useCallback } from 'react';
import type { BreadcrumbItemProps } from './BreadcrumbItem';
import { BreadcrumbItem } from './BreadcrumbItem';

export type BreadcrumbProps = {
  /**
   * 是否有边框
   */
  bordered?: boolean;
  /**
   * 配置项书写方式
   */
  items?: BreadcrumbItemProps[];
} & React.ComponentPropsWithoutRef<'ul'>;

/**
 * Breadcrumb 组件
 * @reference https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Breadcrumb.tsx
 * @reference https://github.com/Tencent/tdesign-react/blob/develop/packages/components/breadcrumb/Breadcrumb.tsx
 * TODO: 需要增加 separator 属性
 */
export const Breadcrumb = forwardRef<HTMLUListElement, BreadcrumbProps>((props, ref) => {
  const { children, className, bordered = true, items, ...restProps } = props;

  const renderBreadcrumbItems = useCallback(() => {
    if (!items?.length) {
      // 如果没有 items, 说明直接传入了 children
      const isBreadcrumbItemType = React.Children.toArray(children).every(
        (child) => React.isValidElement(child) && child.type === BreadcrumbItem,
      );
      if (!isBreadcrumbItemType) {
        console.warn("Only accepts Breadcrumb.Item as it's children");
      }
      return children;
    }

    // 如果有 items, 说明使用配置方法
    return (
      <>
        {items.map(({ children, content, ...restItemProps }, index) => (
          <BreadcrumbItem {...restItemProps} key={index}>
            {content ?? children}
          </BreadcrumbItem>
        ))}
      </>
    );
  }, [items, children]);

  return (
    <ul className={clsx('breadcrumb', { border: bordered }, className)} ref={ref} {...restProps}>
      {renderBreadcrumbItems()}
    </ul>
  );
});

Breadcrumb.displayName = 'Breadcrumb';
