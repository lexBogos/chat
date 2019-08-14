// import React, {Component} from 'react';
// import Websocket from 'react-websocket';
import moment from 'moment';
import store from '../store';
import {messagesLoaded}  from  '../actions';


class MessagestoreService {
    data  = []; 

    handleData = (data) => {
      
      let result = JSON.parse(data).reverse();
      result.map((mes) => {return mes.time = moment(mes.time).format('MMMM Do YYYY, h:mm:ss a')})
      const oldState = this.data;
      const resArr = [...oldState, ...result];
      this.data = resArr;
      // console.log(resArr[resArr.length-1]);
      store.dispatch(messagesLoaded(this.data));
      return this.data;
    
    }
    sendMessage(){

    }


    getMessages() {
      let socket = new WebSocket("ws://st-chat.shas.tel");

      socket.onopen = () => {
        console.log("Соединение установлено.");
      };

      socket.onclose = (event) => {
        if (event.wasClean) {
          console.log('Соединение закрыто чисто');
        } else {
          console.log('Обрыв соединения'); 
        }
        console.log('Код: ' + event.code + ' причина: ' + event.reason);
      };
      
      socket.onerror = (error) => {
        console.log("Ошибка " + error);
      };

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