import clsx from 'clsx';
import { uniqueId } from 'lodash-es';
import { forwardRef } from 'react';

export type NavbarItem = {
  label: string;
} & React.ComponentPropsWithoutRef<'a'>;

export type NavBarProps = {
  /**
   * 标题
   */
  brand: string | React.ReactNode;
  /**
   * 是否显示边框
   * @default true
   */
  bordered?: boolean;
  /**
   * 是否固定在顶部
   * @default true
   */
  fixed?: boolean;
  /**
   * 是否分割导航栏
   * @default true
   */
  splitNav?: boolean;
  /**
   * 导航栏右侧的内容
   */
  navbarItems?: NavbarItem[];
};

export const Navbar = forwardRef<HTMLElement, NavBarProps>(
  ({ brand, bordered = true, fixed = true, splitNav = true, navbarItems = [] }, ref) => {
    const id = uniqueId('navbar-');

    return (
      <nav className={clsx({ border: bordered, fixed, 'split-nav': splitNav })} ref={ref}>
        <div className="nav-brand">
          <h3>{typeof brand === 'string' ? <a href="#">{brand}</a> : brand}</h3>
        </div>
        <div className="collapsible">
          <input id={id} type="checkbox" name="collapsible1" />
          <label htmlFor={id}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </label>
          <div className="collapsible-body">
            <ul className="inline">
              {navbarItems.map(({ label, ...restItemProps }, i) => (
                <li key={i}>
                  <a {...restItemProps}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  },
);

Navbar.displayName = 'Navbar';
