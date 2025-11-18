const { registerUser } = require('../src/user_bonus_service');

describe('ІНТЕГРАЦІЯ (ОБ\'ЄДНАНА): Реєстрація користувача + Розрахунок бонусів', () => {

    test('registerUser має правильно інтегрувати розрахунок бонусів для середньої покупки (50 бонусів)', () => {
        const testAmount = 650; // Сума, за яку дається 50 бонусів
        
        const user = registerUser('Ivan_UA', testAmount);
        
        // 1. Перевірка логіки інтегратора (створення користувача)
        expect(user).toHaveProperty('username', 'Ivan_UA');
        
        // 2. Перевірка інтеграції: чи відповідає поле 'bonuses' очікуваному результату?
        // Очікуваний результат: 50
        expect(user.bonuses).toBe(50); 
    });
    
    test('реєстрація з малою сумою має дати мінімальний бонус (10 бонусів)', () => {
        const user = registerUser('Minor_User', 400); // Сума, за яку дається 10 бонусів
        expect(user.bonuses).toBe(10); 
    });
});
