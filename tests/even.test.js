const isEven = require('../src/even');

test('Even/Odd Test: має повертати true для парних чисел', () => {
    // 1. Позитивне парне
    expect(isEven(4)).toBe(true);
    // 2. Нуль
    expect(isEven(0)).toBe(true);
    // 3. Від'ємне парне
    expect(isEven(-10)).toBe(true);
});

test('Even/Odd Test: має повертати false для непарних чисел та інших типів даних', () => {
    // 1. Непарне число
    expect(isEven(7)).toBe(false);
    // 2. Не число (рядок)
    expect(isEven('5')).toBe(false);
});
