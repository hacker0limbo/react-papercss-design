/**
 * title: 受控
 * description: 作为受控组件时的用法。
 */

import { useState } from 'react';
import { Switch } from 'react-papercss-design';

export default () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <Switch
        checked={checked}
        onChange={(checked) => {
          setChecked(checked);
        }}
      />
      <p>checked: {checked.toString()}</p>
    </>
  );
};
