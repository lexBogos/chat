import React from 'react';
import './header.css'
import saveObj from '../../services/data-to-localStorage'

class Header extends React.Component{
state = {
    nickName: 'defaultNick'
}

updateNickNameValue = (event) => {
    this.setState({
        nickName: event.target.value,
    });
}

render(){
    return(<header>
            <a className='logo' href='#'>Chat</a>
                <div className='nickNameContainer'>
                    <input 
                    onChange = {(event) => this.updateNickNameValue(event)}
                    className ='inputNickName'
                    type = 'text'
                    placeholder='defaultNick'>
                    </input>
                    <button onClick={() => {saveObj(this.state.nickName)}}>ChangeNick</button>
            </div>
           </header>)
    }
};


export default Header;