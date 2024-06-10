import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <InfinitySpin
        visible={true}
        width="200"
        color="red"
        ariaLabel="infinity-spin-loading"
      />
      <p>Loading... please wait...</p>
    </div>
  );
};

export default Loader;
