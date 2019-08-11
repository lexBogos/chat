import React, {Component} from 'react';
import MessageListItem from '../message-list-item';
import {connect} from 'react-redux';
import withMessageStoreService  from '../hoc';
import {messagesLoaded}  from  '../../actions'
import {bindActionCreators} from 'redux';
import Spinner  from '../spinner';
import WebsocketComp from '../websocet';


class MessageList extends Component {

    componentDidMount(){

     const {messagestoreService, messagesLoaded} = this.props;
     messagestoreService.getMessages().then((data) => messagesLoaded(data));
     

    }

    render () {
         const {messages, loading} = this.props;
         console.log(messages);
         if(loading){return <Spinner />}
         return (
            <ul>
                {
                  messages.map((message) => {
                      return (
                        <li key={message.id}><MessageListItem messageObj={message}/></li>
                      )
                  })
                }
                <WebsocketComp />
            </ul>
         ); 
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
        loading: state.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({messagesLoaded}, dispatch)
    
}


export default withMessageStoreService()(connect(mapStateToProps, mapDispatchToProps)(MessageList));