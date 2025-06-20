import { createContext } from 'react';

export type CheckboxGroupContextType = {
  value: (string | number)[];
  setValue: (v: React.SetStateAction<(string | number)[]>, ...args: any[]) => void;
  disabled?: boolean;
};

export const CheckboxGroupContext = createContext<CheckboxGroupContextType | null>(null);
