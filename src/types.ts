export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export type Size = 'large' | 'small';

export type Theme = 'light' | 'dark';

// reference: https://github.com/react-restart/ui/blob/main/src/types.ts#L7
export type AssignPropsWithRef<Inner extends string | React.ComponentType<any>, P> = Omit<
  React.ComponentPropsWithRef<Inner extends React.ElementType ? Inner : never>,
  keyof P
> &
  P;

// reference: https://github.com/react-restart/ui/blob/main/src/types.ts#L29
export interface DynamicRefForwardingComponent<
  TInitial extends string | React.ComponentType<any>,
  P = { children?: React.ReactNode },
> {
  <As extends string | React.ComponentType<any> = TInitial>(
    props: AssignPropsWithRef<As, { as?: As } & P>,
    context?: any,
  ): JSX.Element | null;
  propTypes?: any;
  contextTypes?: any;
  defaultProps?: Partial<P>;
  displayName?: string;
}
