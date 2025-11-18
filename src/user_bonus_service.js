/**
 * Розраховує бонусні бали на основі суми покупки.
 */
function calculateBonus(amount) {
    if (amount >= 1000) return 100;
    if (amount >= 500) return 50;
    return 10;
}

/**
 * Реєструє користувача та нараховує початкові бонуси,
 * використовуючи функцію calculateBonus з цього ж файлу.
 */
function registerUser(username, initialPurchaseAmount) {
    const newUser = {
        username: username,
        status: 'Active',
    };

    const bonusPoints = calculateBonus(initialPurchaseAmount);
    
    newUser.bonuses = bonusPoints;
    
    return newUser;
}

module.exports = { registerUser, calculateBonus };
