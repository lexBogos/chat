import React from 'react';
import MessageList from '../components/message-list';
import Header from '../components/header'

const HomePage = () => {
    return <div>
        <Header />
        HomePage
         <MessageList q='1'/>  
        </div>
}

export default HomePage