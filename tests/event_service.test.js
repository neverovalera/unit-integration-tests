const { createEvent, notifyUser } = require('../src/event_service');

describe('ІНТЕГРАЦІЯ: Створення події + сповіщення користувачів', () => {

    test('createEvent має правильно створювати подію і викликати notifyUser', () => {
        const eventData = {
            title: 'Team Meeting',
            date: '2025-11-20',
            participants: ['Alice', 'Bob']
        };

        const event = createEvent(eventData.title, eventData.date, eventData.participants);

        // Перевірка створення події
        expect(event.title).toBe('Team Meeting');
        expect(event.date).toBe('2025-11-20');
        expect(event.participants).toEqual(['Alice', 'Bob']);

        // Перевірка інтеграції: notifyUser викликається для всіх учасників
        expect(event.notifications).toEqual([
            'Notification sent to Alice',
            'Notification sent to Bob'
        ]);
    });

});
