import { createContext } from 'react';

export type RadioGroupContextType = {
  value?: string | number;
  setValue: (v: React.SetStateAction<string | number | undefined>, ...args: any[]) => void;
  disabled?: boolean;
};

export const RadioGroupContext = createContext<RadioGroupContextType | null>(null);
