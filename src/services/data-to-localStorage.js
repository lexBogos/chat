function saveObj(nickName) {
    const stateObj = {nickName: nickName}
    localStorage.setItem('stateObj', JSON.stringify(stateObj));
    console.log(localStorage.getItem('stateObj'))
};




export default saveObj;

