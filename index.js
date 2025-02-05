// index.js

/**
 * Debounce function
 * @param {Function} func - The function to debounce
 * @param {number} wait - Delay in milliseconds
 * @param {Object} options - Optional configuration
 * @returns {Function} - Debounced function
 */
function debounce(func, wait, options = {}) {
    let timeout;
    const { leading = false, trailing = true } = options;

    return function(...args) {
        const context = this;
        clearTimeout(timeout);

        if (leading && !timeout) {
            func.apply(context, args);
        }

        timeout = setTimeout(() => {
            if (trailing) {
                func.apply(context, args);
            }
        }, wait);
    };
}

/**
 * Throttle function
 * @param {Function} func - The function to throttle
 * @param {number} limit - Interval in milliseconds
 * @returns {Function} - Throttled function
 */
function throttle(func, limit) {
    let inThrottle;

    return function(...args) {
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

module.exports = {
    debounce,
    throttle,
};