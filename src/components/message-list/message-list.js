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
        this.state = {
            numberOfShowedMessages: 30
        }
        this.OnTheBottom = true; 
        this.myRef = React.createRef();
        this.bootomPosition = '';
    }

    componentDidMount(){
    const {messagestoreService, messagesLoaded} = this.props;
         messagestoreService.getMessages().then((data) => messagesLoaded(data));
        //  this.myRef.current.scrollTop = this.myRef.current.scrollHeight;
    }

    componentDidUpdate(){
        if (this.OnTheBottom) {
            this.myRef.current.scrollTop = this.myRef.current.scrollHeight
        }
    }

    render () {
         const {messages, loading} = this.props;

         if(loading){return <Spinner />}

         let arrayForLastMessages;

         if ( messages.length > 30 ) {
            arrayForLastMessages = messages.slice(-this.state.numberOfShowedMessages)
         }
         else{
            arrayForLastMessages = messages;
         }
      


         return (
                <div className = 'chatContainer' ref={this.myRef} onScroll={() => {
                        if ((this.myRef.current.scrollHeight - this.myRef.current.scrollTop) === this.myRef.current.clientHeight) {
                        this.OnTheBottom = true; 
                        }
                        else{
                            this.OnTheBottom = false;
                        }
                        if (this.myRef.current.scrollTop < 100) {
                            if (arrayForLastMessages.length + 30 < messages.length ){
                                this.setState({numberOfShowedMessages: this.state.numberOfShowedMessages + 30})
                                }
                            else{
                                this.setState({numberOfShowedMessages: messages.length})
                                }                          
                            }
                    }}>

                   { arrayForLastMessages.map((message) => {
                        return (
                            <div key={message.id}><MessageListItem messageObj={message}/></div>
                        )
                    })}
                </div>
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