import React, { forwardRef } from 'react';

export type ListItem = {
  title: string;
  children?: ListItem[];
};

type BaseProps = {
  /**
   * 列表数据源
   */
  data: ListItem[];
  /**
   * 是否为有序列表
   */
  ordered?: boolean;
};

type OrderedListProps = BaseProps & React.ComponentPropsWithoutRef<'ol'> & { ordered?: true };
type UnorderedListProps = BaseProps & React.ComponentPropsWithoutRef<'ul'> & { ordered: false };

export type ListProps = OrderedListProps | UnorderedListProps;

const renderNodes = (nodes: ListItem[], ordered: boolean): React.ReactNode => {
  const ListTag = ordered ? 'ol' : 'ul';
  return nodes.map((item, index) => (
    <li key={index}>
      {item.title}
      {item.children && item.children.length > 0 && (
        <ListTag>{renderNodes(item.children, ordered)}</ListTag>
      )}
    </li>
  ));
};

/**
 * List 组件, 可以看成一个 Tree 组件
 */
export const List = forwardRef<HTMLOListElement | HTMLUListElement, ListProps>(
  ({ data, ordered = true, ...restProps }, ref) => {
    if (ordered) {
      return (
        <ol ref={ref as React.Ref<HTMLOListElement>} {...restProps}>
          {renderNodes(data, true)}
        </ol>
      );
    } else {
      return (
        <ul ref={ref as React.Ref<HTMLUListElement>} {...restProps}>
          {renderNodes(data, false)}
        </ul>
      );
    }
  },
);
