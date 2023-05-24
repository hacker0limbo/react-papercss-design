/**
 * title: 和父元素一起使用
 * description: 和父元素一起使用时自适应大小
 */
import { Badge } from 'react-papercss-design';

export default () => {
  return (
    <>
      <h1>
        Example h1 heading <Badge type="default">123</Badge>
      </h1>
      <h2>
        Example h2 heading <Badge type="primary">123</Badge>
      </h2>
      <h3>
        Example h3 heading <Badge type="secondary">123</Badge>
      </h3>
      <h4>
        Example h4 heading <Badge type="success">123</Badge>
      </h4>
      <h5>
        Example h5 heading <Badge type="warning">123</Badge>
      </h5>
      <h6>
        Example h6 heading <Badge type="danger">123</Badge>
      </h6>
    </>
  );
};
