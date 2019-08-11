const messagesLoaded = (newMessages) => {
    return {
        type: 'MESSAGES_LOADED',
        payload: newMessages
    };
};

export {
    messagesLoaded
};