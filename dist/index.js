"use strict";
// index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = debounce;
exports.throttle = throttle;
function debounce(func, wait, options = {}) {
    let timeout;
    const { leading = false, trailing = true } = options;
    return function (...args) {
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
function throttle(func, limit) {
    let inThrottle = false;
    return function (...args) {
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
