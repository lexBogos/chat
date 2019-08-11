import React from 'react';
import Websocket from 'react-websocket';
import './websocket.css';


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
        return <div>
                 <Websocket url='ws://st-chat.shas.tel'
                 onMessage={(data) => {this.handleData(data)}}
                />
                {this.state.messageList.map((mes) => {return (
                        <div className='messageContainer' key={mes.id}>
                            <div className='time'>time:{mes.time}</div>
                            <div className='id'>id:{mes.id}</div>
                            <div className='from'>from:{mes.from}</div>
                            <div className='message'>message:{mes.message}</div>
                        </div>
                      )})}
               </div>
    }
}

export default WebsocketComp;