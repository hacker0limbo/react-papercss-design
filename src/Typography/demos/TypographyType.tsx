/**
 * title: 文本颜色和背景色
 * description: 设置文本颜色和背景色
 */
import { Space, Typography } from 'react-papercss-design';

export default () => {
  return (
    <Space direction="vertical">
      <Typography.Text backgroundType="danger">Default Text with danger background</Typography.Text>
      <Typography.Text textType="primary" backgroundType="success">
        Primary Text with success background
      </Typography.Text>
      <Typography.Text textType="secondary">Secondary Text</Typography.Text>
      <Typography.Text textType="success">Success Text</Typography.Text>
      <Typography.Text textType="warning">Warning Text</Typography.Text>
      <Typography.Text textType="danger">Danger Text</Typography.Text>
      <Typography.Text textType="muted">Muted Text</Typography.Text>
    </Space>
  );
};
