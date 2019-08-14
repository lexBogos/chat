// import React, {Component} from 'react';
// import Websocket from 'react-websocket';
import moment from 'moment';

export default class MessagestoreService {
    data  = []; 

    handleData = (data) => {
      let result = JSON.parse(data).reverse();
      result.map((mes) => {return mes.time = moment(mes.time).format('MMMM Do YYYY, h:mm:ss a')})
      const oldState = this.data;
      const resArr = [...oldState, ...result];
      this.data = resArr;
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
             console.log('vse ok');
             this.handleData(e.data)
             resolve(e.data);
            }
          else(reject('Ne ok'))}
        })
         .then(()=>{return this.data})
    }
  }