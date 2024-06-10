import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div>
      <InfinitySpin
        visible={true}
        width="200"
        color="red"
        ariaLabel="infinity-spin-loading"
      />
      <p className={css.loader}>Loading... please wait...</p>
    </div>
  );
};

export default Loader;
