import moment from 'moment';
import store from '../store';
import {messagesLoaded, lostConnection, restoreConnection}  from  '../actions';
import notifyMe from './notification';
;

class MessagestoreService {
    data  = []; 
    socket;
    arrayForSendingOffline = [];


  
    handleData = (data) => {
      
      let result = JSON.parse(data).reverse();
      result.map((mes) => {return mes.time = moment(mes.time).format('MMMM Do YYYY, h:mm:ss a')})
      const oldState = this.data;
      const resArr = [...oldState, ...result];
      this.data = resArr;
      store.dispatch(messagesLoaded(this.data));
      const {from, message} = this.data[this.data.length-1]
      notifyMe(from, message)
     
      return this.data;
    }

    onlineStatus = () => {
        this.arrayForSendingOffline.map((mes) => {
        const {from, message} = mes;
        return this.socket.send(JSON.stringify({
          from: from,
          message: message
        }))
      })
      this.arrayForSendingOffline = [];
    }

    initialConnection = (url) => {
      this.socket = new WebSocket(url);

      this.socket.onopen = () => {
        console.log("Соединение установлено.");
        store.dispatch(restoreConnection());
      };
      
      window.addEventListener('online',  () => {this.onlineStatus()});



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
      };

      return this.socket
    }


    tryToReonnect = () => {
      setTimeout(this.getMessages, 2000)
       return  
    }

    sendMessage = (message) =>{
      let from;
      if (JSON.parse(localStorage.getItem('stateObj'))){
        from = JSON.parse(localStorage.getItem('stateObj')).nickName;
      }
      else{
        from = store.getState().nickName
      }
      if (navigator.onLine) {
        this.socket.send(JSON.stringify({
          from: from,
          message: message
        }))
      }
      else{
        this.arrayForSendingOffline.push({
          from: from,
          message: message
        })
      }
    }


    getMessages = () => {
      let socket = this.initialConnection("wss://wssproxy.herokuapp.com/");

      return new Promise((resolve, reject) => {
            this.data = [];
            socket.onmessage = (e) => {
              if (e.data) {
                resolve(this.handleData(e.data));
                }
              else(reject('Данные не получены'))}    
        })
    }
  }


  export default MessagestoreService;