(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(50)},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(17),r=n.n(c),i=n(14),s=n(22),l=(n(40),n(13)),u=n(6),m=n(9),f=n(11),d=n(10),g=n(12),h=(n(41),function(e){var t=e.messageObj,n=t.time,a=t.from,c=t.message;return o.a.createElement("div",{className:"messageContainer"},o.a.createElement("div",{className:"time"},n),o.a.createElement("div",{className:"from"},a),o.a.createElement("div",{className:"message"},c))}),p=o.a.createContext(),O=p.Provider,N=p.Consumer,b=function(){return function(e){return function(t){return o.a.createElement(N,null,function(n){return o.a.createElement(e,Object.assign({},t,{messagestoreService:n}))})}}},v=function(e){return{type:"MESSAGES_LOADED",payload:e}},E=function(e){return{type:"NICK_CHANGE",nickName:e}},k=n(8),y=(n(42),function(){return o.a.createElement("div",null,"Spinner")}),S=(n(43),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(f.a)(this,Object(d.a)(t).call(this))).state={numberOfShowedMessages:30},e.OnTheBottom=!0,e.myRef=o.a.createRef(),e}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.messagestoreService,n=e.messagesLoaded;t.getMessages().then(function(e){return n(e)})}},{key:"componentDidUpdate",value:function(){console.log("update"),this.OnTheBottom&&(this.myRef.current.scrollTop=this.myRef.current.scrollHeight)}},{key:"render",value:function(){var e,t=this,n=this.props,a=n.messages;return n.loading?o.a.createElement(y,null):(e=a.length>30?a.slice(-this.state.numberOfShowedMessages):a,o.a.createElement("div",{className:"chatContainer",ref:this.myRef,onScroll:function(){t.myRef.current.scrollHeight-t.myRef.current.scrollTop>600?t.OnTheBottom=!1:t.OnTheBottom=!0,t.myRef.current.scrollTop<100&&(e.length+30<a.length?t.setState({numberOfShowedMessages:t.state.numberOfShowedMessages+30}):t.setState({numberOfShowedMessages:a.length}))}},e.map(function(e){return o.a.createElement("div",{key:e.id},o.a.createElement(h,{messageObj:e}))})))}}]),t}(a.Component)),j=b()(Object(i.b)(function(e){return{messages:e.messages,loading:e.loading}},function(e){return Object(k.a)({messagesLoaded:v},e)})(S));n(44);var C=function(e){var t={nickName:e};localStorage.setItem("stateObj",JSON.stringify(t)),console.log(localStorage.getItem("stateObj"))},w=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={nickName:"defaultNick"},n.updateNickNameValue=function(e){n.setState({nickName:e.target.value})},n.restorePlaceholder=function(){return JSON.parse(localStorage.getItem("stateObj"))?JSON.parse(localStorage.getItem("stateObj")).nickName:"defaultNick"},n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("header",null,o.a.createElement("a",{className:"logo",href:"#"},"Chat"),o.a.createElement("div",{className:"nickNameContainer"},o.a.createElement("input",{onChange:function(t){return e.updateNickNameValue(t)},className:"inputNickName",type:"text",placeholder:this.restorePlaceholder()}),o.a.createElement("button",{onClick:function(){E(e.state.nickName),C(e.state.nickName)}},"ChangeNick")))}}]),t}(o.a.Component),T=b()(Object(i.b)(function(e){return{nickName:e.nickName}},function(e){return Object(k.a)({changeNickName:E},e)})(w)),M=n(26),I=n(29),R=n.n(I),D=n(19),V={messages:[],loading:!0,connection:!1,nickName:"defaultNick"},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MESSAGES_LOADED":return{messages:t.payload,loading:!1,connection:!0,nickName:"defaultNick"};case"CONNECTION_LOST":case"CONNECTION_RESTORE":return Object(D.a)({},e,{connection:t.connection});case"NICK_CHANGE":return Object(D.a)({},e,{nickName:t.changenickName});default:return e}},L=Object(k.b)(J);var A=function(e,t){var n;"undefined"!==typeof document.hidden?n="hidden":"undefined"!==typeof document.msHidden?n="msHidden":"undefined"!==typeof document.webkitHidden&&(n="webkitHidden"),document[n]&&function(e,t){console.log("note"),"Notification"in window?"granted"===window.Notification.permission?new Notification("".concat(e),{icon:"http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png",body:t}):"denied"!==Notification.permission&&Notification.requestPermission(function(n){"granted"===n&&new Notification("".concat(e,"\n").concat(t))}):alert("This browser does not support desktop notification")}(e,t)},_=function e(){var t=this;Object(u.a)(this,e),this.data=[],this.arrayForSendingOffline=[],this.handleData=function(e){var n=JSON.parse(e).reverse();n.map(function(e){return e.time=R()(e.time).format("MMMM Do YYYY, h:mm:ss a")});var a=t.data,o=[].concat(Object(M.a)(a),Object(M.a)(n));t.data=o,L.dispatch(v(t.data));var c=t.data[t.data.length-1],r=c.from,i=c.message;return console.log(t.data.length),A(r,i),t.data},this.onlineStatus=function(){t.arrayForSendingOffline.map(function(e){var n=e.from,a=e.message;t.socket.send(JSON.stringify({from:n,message:a}))}),t.arrayForSendingOffline=[]},this.initialConnection=function(e){return t.socket=new WebSocket(e),t.socket.onopen=function(){console.log("\u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e."),console.log(L.getState()),L.dispatch({type:"CONNECTION_RESTORE",connection:!0})},window.addEventListener("online",function(){t.onlineStatus()}),t.socket.onclose=function(e){e.wasClean?console.log("\u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u043e \u0447\u0438\u0441\u0442\u043e"):console.log("\u041e\u0431\u0440\u044b\u0432 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f"),console.log("\u041a\u043e\u0434: "+e.code+" \u043f\u0440\u0438\u0447\u0438\u043d\u0430: "+e.reason),L.dispatch({type:"CONNECTION_LOST",connection:!1}),t.tryToReonnect()},t.socket.onerror=function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 "+e),L.dispatch({type:"CONNECTION_LOST",connection:!1})},t.socket},this.tryToReonnect=function(){setTimeout(t.getMessages,2e3)},this.sendMessage=function(e){var n;console.log("\u043f\u0435\u0440\u0435\u0434 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u043e\u0439",navigator.onLine),console.log("\u043f\u0435\u0440\u0435\u0434 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u043e\u0439",L.getState()),n=JSON.parse(localStorage.getItem("stateObj"))?JSON.parse(localStorage.getItem("stateObj")).nickName:L.getState().nickName,navigator.onLine?t.socket.send(JSON.stringify({from:n,message:e})):t.arrayForSendingOffline.push({from:n,message:e})},this.getMessages=function(){var e=t.initialConnection("ws://st-chat.shas.tel");return new Promise(function(n,a){t.data=[],e.onmessage=function(e){e.data?n(t.handleData(e.data)):a("\u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b")}})}},H=(n(46),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={inputValue:"",field:""},n.updateInputValue=function(e){n.setState({inputValue:e.target.value,field:e.target})},n.pressButton=function(){if(n.state.inputValue){var e=n.state.field,t=new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,keyCode:13,shiftKey:!1});e.dispatchEvent(t)}},n.enterPress=function(e){if(13===e.keyCode&&!e.shiftKey){if(e.preventDefault(),n.state.inputValue){var t=n.state.inputValue;(t=t.trim())&&n.sendMessage(n.state.inputValue)}n.setState({inputValue:""}),e.target.value=""}},n.sendMessage=function(e,t){n.props.messagestoreService.sendMessage(e,t)},n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"textareaContainer"},o.a.createElement("textarea",{onChange:function(t){return e.updateInputValue(t)},onKeyDown:function(t){e.enterPress(t)},className:"form",placeholder:"Write a message..."}),o.a.createElement("button",{onClick:function(){e.pressButton()},className:"btn btn-primary"},"Send"))}}]),t}(a.Component)),x=b()(H),B=(n(47),function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(T,null),o.a.createElement("main",null,o.a.createElement(j,{q:"1"}),o.a.createElement(x,null)))}),P=function(){return o.a.createElement("div",null,o.a.createElement(T,null),"Message page")},K=function(){return o.a.createElement(l.c,null,o.a.createElement(l.a,{path:"/",component:B,exact:!0}),o.a.createElement(l.a,{path:"/message",component:P}))},F=(n(49),function(){return o.a.createElement("div",null,"ErrorIndicator")}),G=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={hasError:!1},n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement(F,null):this.props.children}}]),t}(a.Component),Y=new _;r.a.render(o.a.createElement(i.a,{store:L},o.a.createElement(G,null,o.a.createElement(O,{value:Y},o.a.createElement(s.a,null,o.a.createElement(K,null))))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.3a587d8c.chunk.js.map