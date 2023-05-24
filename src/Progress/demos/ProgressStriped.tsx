/**
 * title: 条纹类型
 * description: 通过设置`striped`显示为条纹类型的进度条
 */
import { Progress, Space } from 'react-papercss-design';

export default () => {
  return (
    <Space direction="vertical">
      <Progress percent={10} striped />
      <Progress percent={25} striped type="secondary" />
      <Progress percent={40} striped type="success" />
      <Progress percent={55} striped type="warning" />
      <Progress percent={75} striped type="danger" />
      <Progress percent={100} striped type="muted" />
    </Space>
  );
};
