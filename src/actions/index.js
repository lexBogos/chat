const messageLoaded = (newMessages) => {
    return {
        type: 'MESSAGES_LOADED',
        payload: newMessages
    };
};

export {
    messageLoaded
};