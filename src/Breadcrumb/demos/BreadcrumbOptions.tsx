/**
 * title: 配置方式的面包屑
 * description: 使用 options 属性配置面包屑内容。
 */
import { Breadcrumb } from 'react-papercss-design';

export default () => {
  return (
    <Breadcrumb
      items={[
        {
          title: 'Page1',
          href: '#',
        },
        {
          title: 'Page2',
          href: '#',
        },
        {
          title: 'Page3',
          active: true,
        },
      ]}
    />
  );
};
