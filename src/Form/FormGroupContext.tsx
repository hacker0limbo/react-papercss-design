import React from 'react';

export type FormGroupContextType = {
  controlId?: string;
};

export const FormGroupContext = React.createContext<FormGroupContextType>({});
