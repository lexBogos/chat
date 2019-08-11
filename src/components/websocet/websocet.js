import React from 'react';
import Websocket from 'react-websocket';
import './websocket.css';
import moment from 'moment';


class WebsocketComp extends React.Component {
    constructor(){
        super();
        this.state = {
            messageList: []
        }
    }

    handleData = (data) => {
        let result = JSON.parse(data);
        const oldState = this.state.messageList;
        const resArr = [...oldState, ...result];
        this.setState({messageList: resArr});
      }


    render() {
        return <div className = 'chatContainer'>
                 <Websocket url='ws://st-chat.shas.tel'
                 onMessage={(data) => {this.handleData(data)}}
                />
                {this.state.messageList.map((mes) => {return (
                        <div className='messageContainer' key={mes.id}>
                            <div className='time'>{moment(mes.time).format('MMMM Do YYYY, h:mm:ss a')}</div>
                            {/* <div className='id'>id:{mes.id}</div> */}
                            <div className='from'>{mes.from}</div>
                            <div className='message'>{mes.message}</div>
                        </div>
                      )})}
               </div>
    }
}

export default WebsocketComp;