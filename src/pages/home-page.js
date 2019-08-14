import React from 'react';
import MessageList from '../components/message-list';
import Header from '../components/header';
import EntryField from '../components/entry-field';
import './home-page.css';


const HomePage = () => {
    return <>
        <Header />
        HomePage
        <main>
         <MessageList q='1'/>
         <EntryField />
         </main>
        </>
}

export default HomePage