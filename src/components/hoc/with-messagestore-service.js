import React from 'react';
import {MessagestoreServiceConsumer} from '../messagestore-service-context';

const withMessageStoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <MessagestoreServiceConsumer>
                {
                    (messagestoreService) => {
                        return <Wrapped {...props} messagestoreService={messagestoreService}/>
                    }
                }
            </MessagestoreServiceConsumer>
        );
    }
};

export default withMessageStoreService;