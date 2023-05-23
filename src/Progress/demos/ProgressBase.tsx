/**
 * title: 基本
 * description: 基本的进度条
 */
import { Progress, Space } from 'react-papercss-design';

export default () => {
  return (
    <Space direction="vertical">
      <Progress percent={10} />
      <Progress percent={25} type="secondary" />
      <Progress percent={40} type="success" />
      <Progress percent={55} type="warning" />
      <Progress percent={75} type="danger" />
      <Progress percent={100} type="muted" />
    </Space>
  );
};
