
function notifyMe(nick, message) {
    let hidden, visibilityChange; 
    if (typeof document.hidden !== "undefined") { 
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
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    else if (window.Notification.permission === "granted") {
      new Notification(`${nick}`, {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_g_gKhF1ECJhc8Pk96BElhyPNK0wovhwqAWov2TXYGigSMxEeA',
        body: message,
       });
    }
  
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          new Notification(`${nick}\n${message}`);
        }
      });
    }
  }    



   

  export  default notifyMe;