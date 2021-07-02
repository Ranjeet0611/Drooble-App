import { Skeleton } from 'antd';
const LoadingSkeleton = (props) => {
  return (
    <Skeleton active loading={props.loading}></Skeleton>
  );
};
export default LoadingSkeleton;