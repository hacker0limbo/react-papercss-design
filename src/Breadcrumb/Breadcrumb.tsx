import clsx from 'clsx';
import { ElementType, forwardRef } from 'react';
import { createUseStyles } from 'react-jss';
import { BaseComponentProps } from '../types';
import { BreadcrumbItem, BreadcrumbItemProps } from './BreadcrumbItem';

export interface BreadcrumbProps extends BaseComponentProps {
  separator?: string;
  as?: ElementType;
  bordered?: boolean;
  children?: React.ReactNode;
  items?: BreadcrumbItemProps[];
}

const useStyles = createUseStyles<any, BreadcrumbProps>({
  breadcrumbUl: {
    '& li + li::before': {
      content: ({ separator = '/' }) => `"${separator} "!important`,
    },
  },
});

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>((props, ref) => {
  const { as: Component = 'div', children, className, style, bordered = false, items } = props;
  const classes = useStyles(props);

  return (
    <Component ref={ref} className={className} style={style}>
      <ul className={clsx('breadcrumb', classes.breadcrumbUl, { border: bordered })}>
        {items?.length
          ? items.map(({ children, title, ...restItemProps }, index) => (
              <BreadcrumbItem {...restItemProps} key={index}>
                {title ?? children}
              </BreadcrumbItem>
            ))
          : children}
      </ul>
    </Component>
  );
});
