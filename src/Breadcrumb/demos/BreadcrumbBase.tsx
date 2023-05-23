/**
 * title: 基本
 * description: 基本的面包屑。
 */
import { Breadcrumb } from 'react-papercss-design';

export default () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Page1</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Page2</Breadcrumb.Item>
      <Breadcrumb.Item active={true}>Page3</Breadcrumb.Item>
    </Breadcrumb>
  );
};
