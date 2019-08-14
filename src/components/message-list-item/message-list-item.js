import React from 'react';
import './message-list-item.css';

const MessageListItem = ({messageObj}) => {

    const {time, from, message} = messageObj;

    return(<div className='messageContainer'>
                <div className='time'>{time}</div>
                <div className='from'>{from}</div>
                <div className='message'>{message}</div>
           </div>)
}

export default MessageListItem;