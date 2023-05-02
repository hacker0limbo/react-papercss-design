export type Variant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export type Size = 'large' | 'normal' | 'small';

export interface BaseComponentProps {
  style?: React.CSSProperties;
  className?: string;
}
