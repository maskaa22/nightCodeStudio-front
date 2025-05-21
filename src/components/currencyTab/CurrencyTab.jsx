import Currency from '../currency/Currency';
import { useMediaQuery } from 'react-responsive';

const CurrencyTab = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    isMobile && (
      <div>
        <Currency />
      </div>
    )
  );
};

export default CurrencyTab;
