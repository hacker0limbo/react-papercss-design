import classNames from 'classnames';
import { forwardRef, useMemo } from 'react';
import { BaseComponentProps, Size, Variant } from '../types';

export interface ButtonProps extends BaseComponentProps {
  type?: Variant;
  outline?: boolean;
  size?: Size;
  tag?: keyof HTMLElementTagNameMap | string;
  nativeType?: string;
  disabled?: boolean;
  block?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * 跳转地址。href 存在时，按钮标签默认使用 `<a>` 渲染；如果指定了 `tag` 则使用指定的标签渲染
   */
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    type = 'default',
    outline = false,
    size = 'normal',
    tag = 'button',
    nativeType = 'button',
    disabled = false,
    block = false,
    children,
    onClick,
    href,
    ...resProps
  } = props;

  const tagName = useMemo(() => {
    if (!tag && href && !disabled) return 'a';
    if (!tag && disabled) return 'div';
    return tag || 'button';
  }, [tag, href, disabled]);

  const TagElement = tagName as React.ElementType;

  return (
    <TagElement
      disabled={disabled}
      ref={ref}
      href={href}
      className={classNames(
        'paper-btn',
        `btn-${size}`,
        { 'btn-block': block },
        { disabled },
        outline ? `btn-${type}-outline` : `btn-${type}`,
      )}
      type={nativeType}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        if (!disabled) {
          onClick?.(e);
        }
      }}
      {...resProps}
    >
      {children}
    </TagElement>
  );
});

export default Button;
