// index.ts

type Timer = ReturnType<typeof setTimeout> | undefined;

interface DebounceOptions {
  leading?: boolean;
  trailing?: boolean;
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options: DebounceOptions = {}
): (...args: Parameters<T>) => void {
  let timeout: Timer;
  const { leading = false, trailing = true } = options;

  return function (this: any, ...args: Parameters<T>): void {
    const context = this;
    if (timeout !== undefined) {
      clearTimeout(timeout);
    }
    if (leading && timeout === undefined) {
      func.apply(context, args);
    }
    timeout = setTimeout(() => {
      if (trailing) {
        func.apply(context, args);
      }
      timeout = undefined;
    }, wait);
  };
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;

  return function (this: any, ...args: Parameters<T>): void {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}
