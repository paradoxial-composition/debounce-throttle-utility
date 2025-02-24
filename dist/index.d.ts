interface DebounceOptions {
    leading?: boolean;
    trailing?: boolean;
}
export declare function debounce<T extends (...args: any[]) => any>(func: T, wait: number, options?: DebounceOptions): (...args: Parameters<T>) => void;
export declare function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void;
export {};
