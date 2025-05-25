import { useSelector } from 'react-redux';
import styles from './GlobalLoader.module.css';

const GlobalLoader = () => {
  const isLoading = useSelector((state) => state.loader.loading);

  if (!isLoading) return null;

  return (
    <div className={styles.backdrop}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default GlobalLoader;
