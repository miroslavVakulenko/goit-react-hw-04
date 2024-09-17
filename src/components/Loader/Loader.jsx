import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <InfinitySpin
      width="200"
      height="100"
      color="white"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
};

export default Loader;
