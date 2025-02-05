# Debounce & Throttle Utility [(NPM)](https://www.npmjs.com/package/debounce-throttle-utility)

A lightweight utility for debouncing and throttling functions, optimized for performance. Ideal for handling events like scrolling, resizing, or input changes in web apps.

## Installation

```bash
npm install debounce-throttle-utility
```

## Usage

### Debounce

```javascript
    const { debounce } = require('debounce-throttle-utility');

    const debouncedFunction = debounce(() => {
        console.log('Debounced!');
    }, 300);

    debouncedFunction(); // Will execute after 300ms of no calls
```

### Throttle

```javascript
    const { throttle } = require('debounce-throttle-utility');

    const throttledFunction = throttle(() => {
        console.log('Throttled!');
    }, 500);

    throttledFunction(); // Will execute only once every 500ms
```

## Key Features

### Simple API for Debounce and Throttle

- The utility offers straightforward methods for applying debounce and throttle logic to any function.

- Example:

```javascript
    const debouncedFunction = debounce(myFunction, 300);
    const throttledFunction = throttle(myFunction, 100);
```

### Customizable Delay and Options

- Developers can specify the delay time (in milliseconds) for both debounce and throttle.
- For debounce, additional options include leading and trailing flags to determine whether the function should execute at the start, end, or both ends of the delay period.
- Example:
  
```javascript
const leadingDebounce = debounce(myFunction, 300, { leading: true });
const trailingDebounce = debounce(myFunction, 300, { trailing: true });
```

### Zero Dependencies

The utility is self-contained and does not rely on external libraries, making it lightweight and easy to integrate into any project.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

MIT.
