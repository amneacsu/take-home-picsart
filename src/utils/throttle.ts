export const throttle = <T extends (...args: any[]) => void>(func: T, delay: number): T => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (...args: Parameters<T>) {
    if (timeoutId) return;

    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, delay);
  } as T;
};
