/**
 * title: 显示数值
 * description: 自定义`label`属性显示数值
 */
import { Progress, Space } from 'react-papercss-design';

export default () => {
  return (
    <Space direction="vertical">
      <Progress percent={10} label={'10%'} />
      <Progress percent={25} label={0.25} striped type="secondary" />
      <Progress percent={40} label={<span style={{ color: 'red' }}>40%</span>} type="success" />
    </Space>
  );
};
