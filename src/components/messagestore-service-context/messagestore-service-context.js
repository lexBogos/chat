import React from 'react';

const {
    Provider: MessagestoreServiceProvider,
    Consumer: MessagestoreServiceConsumer
} = React.createContext();

export {MessagestoreServiceProvider, MessagestoreServiceConsumer};