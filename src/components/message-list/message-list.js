import React, {Component} from 'react';
import MessageListItem from '../message-list-item';
import {connect} from 'react-redux';
// import Websocket from 'react-websocket';
// import moment from 'moment';
import withMessageStoreService  from '../hoc';
import {messagesLoaded}  from  '../../actions'
import {bindActionCreators} from 'redux';
import Spinner  from '../spinner';
import './message-list.css';

class MessageList extends Component {

    constructor(){
        super();
        this.state = {
            messageList: []
        }
    }

    componentDidMount(){
    const {messagestoreService, messagesLoaded} = this.props;
         messagestoreService.getMessages().then((data) => messagesLoaded(data));
    }

    handleData = (data) => {
        let result = JSON.parse(data).reverse();
        const oldState = this.state.messageList;
        const resArr = [...oldState, ...result];
        this.setState({messageList: resArr});
      }



    render () {
         const {messages, loading} = this.props;
        //  console.log(messages);
         if(loading){return <Spinner />}
         return (
            <div>
                   <div className = 'chatContainer'>
                   { messages.map((message) => {
                        return (
                            <div key={message.id}><MessageListItem messageObj={message}/></div>
                        )
                    })}
                    </div>

                {/* <div className = 'chatContainer'>
                 <Websocket url='ws://st-chat.shas.tel'
                 onMessage={(data) => {this.handleData(data)}}
                />
                {this.state.messageList.map((mes) => {return (
                        <div className='messageContainer' key={mes.id}>
                            <div className='time'>{moment(mes.time).format('MMMM Do YYYY, h:mm:ss a')}</div>
                            <div className='from'>{mes.from}</div>
                            <div className='message'>{mes.message}</div>
                        </div>
                      )})}
               </div> */}
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