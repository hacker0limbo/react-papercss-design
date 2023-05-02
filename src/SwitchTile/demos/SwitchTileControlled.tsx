/**
 * title: 受控
 * description: 作为受控组件时的用法。
 */
import { useState } from 'react';
import { SwitchTile } from 'react-papercss-design';

export default () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <SwitchTile
        checked={checked}
        checkedChildren="Back"
        unCheckedChildren="Front"
        onChange={(checked) => {
          setChecked(checked);
        }}
      />
      <p>checked: {checked.toString()}</p>
    </>
  );
};
