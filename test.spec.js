// test.js

const { debounce, throttle } = require('./index');

describe('Debounce', () => {
    it('should delay execution', async () => {
        let count = 0;
        const debounced = debounce(() => {
            count++;
        }, 100);

        debounced();
        debounced();

        await new Promise((resolve) => setTimeout(resolve, 200));
        expect(count).toBe(1); // Should execute only once
    });
});

describe('Throttle', () => {
    it('should limit execution', async () => {
        let count = 0;
        const throttled = throttle(() => {
            count++;
        }, 100);

        throttled();
        throttled();

        await new Promise((resolve) => setTimeout(resolve, 200));
        expect(count).toBe(1); // Should execute only once within 100ms
    });

    it('should be executed only twice in a 500ms interval ', async () => {
        let count = 0;
        const throttled = throttle(() => {
            count++;
        }, 100);

        throttled();
        throttled();
        await new Promise((resolve) => setTimeout(resolve, 200));
        throttled();

        expect(count).toBe(2);
    });
});
