const isValidEmail = require('../src/email');

test('Email Test: має повертати true для валідної адреси', () => {
    // 1. Успішний випадок
    expect(isValidEmail('user@example.com')).toBe(true);
});

test('Email Test: має повертати false для невалідних форматів', () => {
    // 1. Відсутність символу '@'
    expect(isValidEmail('userexample.com')).toBe(false); 
    // 2. Відсутність крапки '.'
    expect(isValidEmail('user@examplecom')).toBe(false); 
    // 3. Порожній рядок
    expect(isValidEmail('')).toBe(false);
});
