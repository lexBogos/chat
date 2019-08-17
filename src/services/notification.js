
function notifyMe(nick, message) {
    let hidden, visibilityChange; 
    if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
      hidden = "hidden";
      visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
      hidden = "msHidden";
      visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
      hidden = "webkitHidden";
      visibilityChange = "webkitvisibilitychange";
    }
    
      if (document[hidden]) {notifyMein(nick, message)} 
     


}

function notifyMein(nick, message) {
    console.log('note')
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    else if (window.Notification.permission === "granted") {
      const notification = new Notification(`${nick}`, {
        icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
        body: message,
       });
    }
  
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          const notification = new Notification(`${nick}\n${message}`);
        }
      });
    }
  }    



  // function notifyMe(nick, message) {
  //   console.log('note')
  //   if (!("Notification" in window)) {
  //     alert("This browser does not support desktop notification");
  //   }
  
  //   else if (window.Notification.permission === "granted") {
  //     const notification = new Notification(`${nick}\n${message}`);
  //   }
  
  //   else if (Notification.permission !== 'denied') {
  //     Notification.requestPermission(function (permission) {
  //       if (permission === "granted") {
  //         const notification = new Notification(`${nick}\n${message}`);
  //       }
  //     });
  //   }
  // }    

  export  default notifyMe;