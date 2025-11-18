function notifyUser(username) {
    // Імітація відправки повідомлення
    return `Notification sent to ${username}`;
}

function createEvent(title, date, participants) {
    const notifications = participants.map(user => notifyUser(user));

    return {
        title,
        date,
        participants,
        notifications
    };
}

module.exports = { createEvent, notifyUser };
