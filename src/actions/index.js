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

const changeNickName = (newNick) => {
    return {
        type: 'NICK_CHANGE',
        nickName: newNick
    }
}

export {
    messagesLoaded,
    lostConnection,
    restoreConnection,
    changeNickName
};