import React, {Component} from 'react';
import MessageListItem from '../message-list-item';
import {connect} from 'react-redux';
import withMessageStoreService  from '../hoc';
import {messagesLoaded}  from  '../../actions';
import {bindActionCreators} from 'redux';
import Spinner  from '../spinner';
import './message-list.css';

class MessageList extends Component {

    constructor(){
        super();
        // this.state = {
        //     messageList: []
        // }
        this.myRef = React.createRef()
    }

    componentDidMount(){
    const {messagestoreService, messagesLoaded} = this.props;
         messagestoreService.getMessages().then((data) => messagesLoaded(data));
         
    }

    componentDidUpdate(){
        this.myRef.current.scrollTop = this.myRef.current.scrollHeight;
    }

    render () {
         const {messages, loading} = this.props;
         if(loading){return <Spinner />}
         
         return (
            <> 
                <div className = 'chatContainer' ref={this.myRef}>
                   { messages.map((message) => {
                        return (
                            <div key={message.id}><MessageListItem messageObj={message}/></div>
                        )
                    })}
                </div>
            </>
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