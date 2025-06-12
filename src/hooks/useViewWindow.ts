import { useEffect, useMemo, useState } from 'react';
import { throttle } from '../utils/throttle.ts';

const overscan = 400;

const getWindow = () => {
  const top = window.pageYOffset - overscan;
  const bottom = top + window.innerHeight + overscan * 2;
  return { top, bottom };
};

export const useViewWindow = () => {
  const [viewport, setViewport] = useState(getWindow);

  const setViewportThrottled = useMemo(() => {
    return throttle(() => {
      setViewport(getWindow());
    }, 100);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', setViewportThrottled);
    return () => window.removeEventListener('scroll', setViewportThrottled);
  }, [setViewportThrottled]);

  return viewport;
};
