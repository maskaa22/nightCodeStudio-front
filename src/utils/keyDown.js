import { useEffect } from 'react';

export const useKeyDownFunction = ({ onClose }) => {
  const handleSubmit = useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return handleSubmit;
};
