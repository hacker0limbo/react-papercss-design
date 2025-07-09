import { useControllableValue } from 'ahooks';
import clsx from 'clsx';
import { clamp, omit, range } from 'lodash-es';
import React, { useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { Button } from '../Button';
import useLocale from '../i18n/useLocale';
import { Input } from '../Input';
import { Select } from '../Select';
import { Size } from '../types';
import { PaginationNavItem } from './PaginationNavItem';

// reference: https://juejin.cn/post/7188077505184546871
export type PaginationProps = {
  /**
   * 当前第几页
   */
  current?: number;
  /**
   * 默认当前第几页
   * @default 1
   */
  defaultCurrent?: number;
  /**
   * 每页多少条
   */
  pageSize?: number;
  /**
   * 默认每页多少条
   * @default 10
   */
  defaultPageSize?: number;
  /**
   * 指定每页可以显示多少条进行配置
   * @default [10, 20, 50, 100]
   */
  pageSizeOptions?: number[];
  /**
   * 是否显示页码跳转
   * @default false
   */
  showQuickJumper?: boolean;
  /**
   * 是否显示页码切换, 当 total > 50 时默认展示
   */
  showSizeChanger?: boolean;
  /**
   * 是否展示为简单分页
   */
  simple?: boolean;
  /**
   * 尺寸大小, 默认不给时为中等
   * @default default
   */
  size?: Size;
  /**
   * 总条数
   * @default 0
   */
  total?: number;
  /**
   * 当前第几页发生变化时候的回调
   */
  onCurrentChange?: (current: number) => void;
  /**
   * 每页多少条发生变化时候的回调
   */
  onPageSizeChange?: (pageSize: number) => void;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  prevLabel?: React.ReactNode;
  nextLabel?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'ul'>;

type PaginationRuleNames =
  | 'pagination'
  | 'paginationItem'
  | 'paginationQuickJumper'
  | 'paginationSizeChanger'
  | 'disabledText';

// 定义字体大小映射
const fontSizeMap: Record<Size, string> = {
  small: '0.75rem',
  default: '1rem',
  large: '2rem',
};

// jumper 和 sizeChanger 的高度
const indicatorSizeMap: Record<Size, string> = {
  small: '2rem',
  default: '2.75rem',
  large: '4.5rem',
};

const useStyles = createUseStyles<PaginationRuleNames, { size: Size }>({
  pagination: {
    'ul&': {
      display: 'inline-block',
      padding: 0,
      margin: 0,
    },
    // 统一设置字体大小
    'ul& li, ul& li select, ul& li input[type="number"]': {
      fontSize: ({ size }) => fontSizeMap[size] || fontSizeMap.default,
    },
  },
  paginationItem: {
    'ul li&': {
      display: 'inline',
      textIndent: 0,
      // 保持所有 item 垂直居中对齐
      verticalAlign: 'middle',
      '&::before': {
        content: "''",
      },
    },
    'ul li&:not(:last-child)': {
      marginRight: 8,
    },
  },
  paginationSizeChanger: {
    'ul li &': {
      display: 'inline-block',
      height: ({ size }) => indicatorSizeMap[size] || indicatorSizeMap.default,
    },
  },
  paginationQuickJumper: {
    'ul li &': {
      display: 'inline-block',
      width: 75,
      margin: '0 8px',
      height: ({ size }) => indicatorSizeMap[size] || indicatorSizeMap.default,
    },
  },
  disabledText: {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
});

// 省略号文本
const ELLIPSIS = '•••';
// 最多展示的页码数量, 包含页码和省略号, 一般为奇数比较方便当前页码居中展示
const MAX_PAGES = 7;
// 减去首页和尾页, 剩余的页码数量
const MAX_MIDDLE_PAGES = MAX_PAGES - 2;

/**
 * Pagination component
 */
export const Pagination = React.forwardRef<HTMLUListElement, PaginationProps>((props, ref) => {
  const {
    size = 'default',
    prevLabel,
    nextLabel,
    disabled,
    total = 0,
    pageSizeOptions = [10, 20, 50, 100],
    showSizeChanger,
    showQuickJumper,
    simple,
    ...restProps
  } = omit(props, [
    'current',
    'defaultCurrent',
    'pageSize',
    'defaultPageSize',
    'onCurrentChange',
    'onPageSizeChange',
  ]);
  const classes = useStyles({ size });
  const [current, setCurrent] = useControllableValue<number>(props, {
    defaultValue: 1,
    valuePropName: 'current',
    defaultValuePropName: 'defaultCurrent',
    trigger: 'onCurrentChange',
  });
  const [pageSize, setPageSize] = useControllableValue<number>(props, {
    defaultValue: 10,
    valuePropName: 'pageSize',
    defaultValuePropName: 'defaultPageSize',
    trigger: 'onPageSizeChange',
  });
  // 一共多少页
  const totalPages = useMemo(() => Math.ceil(total / pageSize), [total, pageSize]);
  const { t } = useLocale();

  /**
   * 展示的页码, 包含多种情况, 为一个数组, 里面包含页码数字和省略号,
   * 例如:[1, 2, 3, 4, 5] 纯数字
   * 或者 [1, 2, 3, 4, 5, 6, 7..., 10] 包含一个省略号和数组的
   * 或者完整的 [1, ..., 4, 5, 6, ..., 10], 数组长度不超过 MAX_PAGES
   */
  const displayedPages = useMemo(() => {
    // 如果当前总页数 <= MAX_PAGE，则直接将当前总页数转成数组, e.g. [1, 2, 3, 4, 5, 6, 7]
    if (totalPages <= MAX_PAGES) {
      return range(1, totalPages + 1);
    } else {
      // 如果当前总页数 > MAX_PAGE, 需要考虑三种情况
      if (current <= Math.ceil(MAX_MIDDLE_PAGES / 2)) {
        // 1. 当前页码离首页稍近的时候，尾部显示省略号, 例如 [1, 2, (3), 4, 5, ..., 10]
        return [...range(1, MAX_MIDDLE_PAGES + 1), ELLIPSIS, totalPages];
      } else if (current >= totalPages - Math.floor(MAX_MIDDLE_PAGES / 2)) {
        // 2.当前页码离尾页稍近的时候，头部显示省略号, 例如, [1, ..., 6, 7, (8), 9, 10]
        return [1, ELLIPSIS, ...range(totalPages - MAX_MIDDLE_PAGES + 1, totalPages + 1)];
      } else {
        // 两边显示两个省略号的情况, 例如 [1, ..., 4, (5), 6,..., 10]
        // 当前页码每一边除了省略号和首/尾页需要展示的页码个数, 这里 5 = 首 + 省略号 + curPage + 省略号 + 尾
        const side = (MAX_PAGES - 5) / 2;
        const leftSidePages = range(current - side, current);
        const rightSidePages = range(current + 1, current + side + 1);
        return [1, ELLIPSIS, ...leftSidePages, current, ...rightSidePages, ELLIPSIS, totalPages];
      }
    }
    // 如果当前页数 > MAX_PAGE, 分三种情况需要考虑省略号, 因为最大展示的页码数量不能超过 MAX_PAGES
  }, [current, totalPages]);

  return (
    <ul ref={ref} className={classes.pagination} {...restProps}>
      <li className={classes.paginationItem}>
        <PaginationNavItem
          size={size}
          action="prev"
          label={prevLabel}
          disabled={disabled || current === 1}
          onClick={() => {
            setCurrent((prev) => clamp(prev - 1, 1, totalPages));
          }}
        />
      </li>
      {simple ? (
        <li className={classes.paginationItem}>
          <span className={clsx(disabled && classes.disabledText)}>
            {current} / {totalPages}
          </span>
        </li>
      ) : (
        displayedPages.map((page, index) => (
          <li key={index} className={classes.paginationItem}>
            {page === ELLIPSIS ? (
              <span className={clsx(disabled && classes.disabledText)}>{page}</span>
            ) : (
              <Button
                disabled={disabled}
                type={current === page ? 'secondary' : undefined}
                size={size}
                onClick={() => {
                  setCurrent(page as number);
                }}
              >
                {page}
              </Button>
            )}
          </li>
        ))
      )}
      <li className={classes.paginationItem}>
        <PaginationNavItem
          size={size}
          action="next"
          label={nextLabel}
          disabled={disabled || current === totalPages}
          onClick={() => {
            setCurrent((prev) => clamp(prev + 1, 1, totalPages));
          }}
        />
      </li>
      {total >= 500 || showSizeChanger ? (
        <li className={classes.paginationItem}>
          <Select
            className={classes.paginationSizeChanger}
            disabled={disabled}
            defaultValue="10"
            onChange={(value) => {
              const newPageSize = parseInt(value, 10);
              const newTotalPages = Math.ceil(total / newPageSize);
              setPageSize(newPageSize);
              // 如果当前页码大于总页数, 则需要调整当前页码到最新的最后一页
              if (current > newTotalPages) {
                setCurrent(newTotalPages);
              }
            }}
            options={pageSizeOptions.map((option) => ({
              value: option.toString(),
              label: `${option} ${t('pagination.perPage')}`,
            }))}
          />
        </li>
      ) : null}
      {showQuickJumper ? (
        <li className={classes.paginationItem}>
          <span className={clsx(disabled && classes.disabledText)}>{t('pagination.goto')}</span>
          <Input
            type="number"
            className={classes.paginationQuickJumper}
            disabled={disabled}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const inputValue = parseInt((e.target as HTMLInputElement).value, 10);
                const newCurrent = clamp(inputValue, 1, totalPages);
                setCurrent(newCurrent);
              }
            }}
          />
          <span className={clsx(disabled && classes.disabledText)}>{t('pagination.page')}</span>
        </li>
      ) : null}
    </ul>
  );
});

Pagination.displayName = 'Pagination';
