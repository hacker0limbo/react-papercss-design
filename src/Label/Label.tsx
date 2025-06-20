import React, { useContext } from 'react';
import { FormGroupContext } from '../Form/FormGroupContext';

export type LabelProps = React.ComponentPropsWithoutRef<'label'>;

/**
 * Label component
 * @reference https://github.com/react-bootstrap/react-bootstrap/blob/master/src/FormLabel.tsx
 */
export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ htmlFor: htmlForProp, children, ...restProps }, ref) => {
    const { controlId } = useContext(FormGroupContext);

    // use controlId as fallback if htmlFor is not provided
    const htmlFor = htmlForProp || controlId;

    return (
      <label htmlFor={htmlFor} ref={ref} {...restProps}>
        {children}
      </label>
    );
  },
);

Label.displayName = 'Label';
