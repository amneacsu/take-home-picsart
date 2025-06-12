import { useEffect, useState, useMemo } from 'react';
import { debounce } from '../utils/debounce.ts';

const getCols = (width: number) => {
  if (width >= 1200) return 4;
  if (width >= 900) return 3;
  if (width >= 600) return 2;
  return 1;
};

export const useGridColumnCount = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const setWidthThrottled = useMemo(() => debounce(setWidth, 100), []);

  useEffect(() => {
    const observer = new ResizeObserver((entry) => {
      setWidthThrottled(entry[0].contentRect.width);
    });

    observer.observe(document.body);
    return () => observer.unobserve(document.body);
  }, [setWidthThrottled]);

  return getCols(width);
};
