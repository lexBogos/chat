// function removeLocal() {
//     localStorage.clear();
//   }

function saveObj(nickName) {
    const stateObj = {nickName: nickName}
    localStorage.setItem('stateObj', JSON.stringify(stateObj));
    console.log(localStorage.getItem('stateObj'))
};

//   const stateObj = JSON.parse(localStorage.getItem('stateObj'));

//   if (JSON.stringify(localStorage.getItem('stateObj')) !== 'null') {
//     restoreStyle();
//   }


export default saveObj;

