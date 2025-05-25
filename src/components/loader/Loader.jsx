import { useSelector } from 'react-redux';
import { BounceLoader } from 'react-spinners'
import { selectIsLoading } from '../../redux/loader/selectors';

const Loader = () => {
  const isLoading = useSelector(selectIsLoading);
  if (!isLoading) return null
  return (<BounceLoader color="#1e2f33" />  );
};

export default Loader;
