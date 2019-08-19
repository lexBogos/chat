import React from 'react';
import './header.css'
import saveObj from '../../services/data-to-localStorage';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeNickName}  from  '../../actions';
import withMessageStoreService  from '../hoc';


class Header extends React.Component{
state = {
    nickName: 'defaultNick'
}

updateNickNameValue = (event) => {
    this.setState({
        nickName: event.target.value,
    });
}

restorePlaceholder = () => {
    if (JSON.parse(localStorage.getItem('stateObj'))){
        return JSON.parse(localStorage.getItem('stateObj')).nickName;
      }
    else{
        return 'defaultNick'
    }  
}

render(){
    return(<header>
            <a className='logo' href='#'>Chat</a>
                <div className='nickNameContainer'>
                    <input 
                    onChange = {(event) => this.updateNickNameValue(event)}
                    className ='inputNickName'
                    type = 'text'
                    placeholder= {this.restorePlaceholder()}>
                    </input>
                    <button className='buttonChangeNick' onClick={() => {
                                                changeNickName(this.state.nickName);
                                                saveObj(this.state.nickName)
                                            
                                            }}>
                                                ChangeNick
                                            </button>
            </div>
           </header>)
    }
};


const mapStateToProps = (state) => {
    return {
        nickName: state.nickName,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({changeNickName}, dispatch)  
}


export default withMessageStoreService()(connect(mapStateToProps, mapDispatchToProps)(Header));