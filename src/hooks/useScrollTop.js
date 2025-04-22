import { useCallback } from 'react';

const useScrollTop = () => {
  const scrollToTop = useCallback(() => {
    window.scroll(0,0);
  }, []);

  return scrollToTop;
};

export default useScrollTop; 