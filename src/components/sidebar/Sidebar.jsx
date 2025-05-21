import Navigation from '../navigation/Navigation';
import Balance from '../balance/Balance';
import Currency from '../currency/Currency';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
import s from './Sidebar.module.css';

const Sidebar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1279 });
  const location = useLocation();

  return (
    <div className={s.sidebar}>
      <div className={s.mainContent}>
        <Navigation />
        {((isMobile && location.pathname === '/') ||
          (!isMobile && isTablet)) && <Balance />}
      </div>
      <div className={s.additionBlock}>
        {!isTablet && <Balance />}
        {!isMobile && <Currency />}
      </div>
    </div>
  );
};

export default Sidebar;
