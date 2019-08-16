import moment from 'moment';
import store from '../store';
import {messagesLoaded, lostConnection, restoreConnection}  from  '../actions';


class MessagestoreService {
    data  = []; 
    socket;

  
    handleData = (data) => {
      
      let result = JSON.parse(data).reverse();
      result.map((mes) => {return mes.time = moment(mes.time).format('MMMM Do YYYY, h:mm:ss a')})
      const oldState = this.data;
      const resArr = [...oldState, ...result];
      this.data = resArr;
      store.dispatch(messagesLoaded(this.data));
      return this.data;
    }

    initialConnection = (url) => {
      this.socket = new WebSocket(url);

      this.socket.onopen = () => {
        console.log("Соединение установлено.");
        // console.log(store.getState());
        store.dispatch(restoreConnection());
      };

      this.socket.onclose = (event) => {
        if (event.wasClean) {
          console.log('Соединение закрыто чисто');
        } else {
          console.log('Обрыв соединения'); 
        }
        console.log('Код: ' + event.code + ' причина: ' + event.reason);
        store.dispatch(lostConnection());
        this.tryToReonnect()
      };

      this.socket.onerror = (error) => {
        console.log("Ошибка " + error);
        store.dispatch(lostConnection());
        this.tryToReonnect()
      };

      return this.socket
    }


    tryToReonnect = () => {
      if(!store.getState().connection){
        setTimeout(this.getMessages(), 3000)
      }
      else{console.log(store.getState());}
    }

    sendMessage = (message) =>{
      let from;
      // console.log(store.getState())
      if (JSON.parse(localStorage.getItem('stateObj')).nickName){
        from = JSON.parse(localStorage.getItem('stateObj')).nickName;
      }
      else{
        from = store.getState().nickName === 'defaultNick'
      }
      // console.log(message)
      this.socket.send(JSON.stringify({
        from: from,
        message: message
      }))
    }


    getMessages() {
      let socket = this.initialConnection("ws://st-chat.shas.tel");

      return new Promise((resolve, reject) => {
        socket.onmessage = (e) => {
          if (e.data) {
             resolve(this.handleData(e.data));
            }
          else(reject('Ne ok'))}
        })
    }
  }


  export default MessagestoreService;