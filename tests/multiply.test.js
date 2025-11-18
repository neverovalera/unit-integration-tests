const multiply = require('../src/multiply');

test('Множення чисел', () => {
    expect(multiply(4, 8)).toBe(32); 
    expect(multiply(-2, 5)).toBe(-10); 
    expect(multiply(0, 10)).toBe(0);
});
