import React from 'react';

export type FormContextType = {
  disabled?: boolean;
};

export const FormContext = React.createContext<FormContextType>({});
