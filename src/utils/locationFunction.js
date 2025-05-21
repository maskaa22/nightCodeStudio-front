import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

export const useRedirectFunction = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleSubmit = useEffect(() => {
    const knownPaths = ['/', '/statistics', '/currency', '/register', '/login'];

    if (location.pathname === '/currency' && !isMobile) {
      navigate('/');
    } else if (!knownPaths.includes(location.pathname)) {
      navigate('/');
    }
  }, [isMobile, navigate]);

  return handleSubmit;
};
