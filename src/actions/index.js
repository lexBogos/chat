const messagesLoaded = (newMessages) => {
    return {
        type: 'MESSAGES_LOADED',
        payload: newMessages
    };
};


const lostConnection = () => {
    return {
        type: 'CONNECTION_LOST',
        connection: false
    }
}

const restoreConnection = () => {
    return {
        type: 'CONNECTION_RESTORE',
        connection: true
    }
}


export {
    messagesLoaded,
    lostConnection,
    restoreConnection
};