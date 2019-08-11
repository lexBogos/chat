import React from 'react';

const MessageListItem = ({messageObj}) => {

    const {time, id, from, message} = messageObj;

    return(<div>
                <div>{time}</div>
                <div>{id}</div>
                <div>{from}</div>
                <div>{message}</div>
           </div>)
}

export default MessageListItem;