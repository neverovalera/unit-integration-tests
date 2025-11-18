function isValidEmail(email) {
    if (typeof email !== 'string' || email.length < 5) {
        return false;
    }
    // Перевірка наявності '@' та '.' у коректних позиціях
    const atIndex = email.indexOf('@');
    const dotIndex = email.lastIndexOf('.');

    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
}

module.exports = isValidEmail;
