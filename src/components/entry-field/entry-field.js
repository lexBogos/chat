import React, {Component} from 'react';
import withMessageStoreService  from '../hoc';
import '../../services/messegestore-service';



import './entry-field.css'

 class EntryField extends Component {

    state = {
        inputValue: '',
        field:''
      };

    updateInputValue = (event) => {
            this.setState({
              inputValue: event.target.value,
              field: event.target
            });
        }

    pressButton = () => {

        if(this.state.inputValue){
            const elem = this.state.field;
            const e =  new KeyboardEvent("keydown", {bubbles : true, cancelable : true, keyCode : 13, shiftKey : false});
            elem.dispatchEvent(e);
        }
    }    

    enterPress = (e) => {
        console.log(e.keyCode)
        if (e.keyCode===13){
            if(!e.shiftKey){
                e.preventDefault();
                if(this.state.inputValue){
                    let stringWithoutSpace = this.state.inputValue;
                    stringWithoutSpace = stringWithoutSpace.trim();
                    if(stringWithoutSpace){
                        this.sendMessage(this.state.inputValue)
                    }
                }
                // console.log(e.target.value)
                this.setState({
                    inputValue: ''
                  });
                e.target.value = '';
            }
        }
    }
        
    sendMessage = (from, message) => {
            const {messagestoreService} = this.props;
            messagestoreService.sendMessage(from, message);
            }


    render(){
        return <div className = 'textareaContainer'>
                <textarea
                    onChange = {(event) => this.updateInputValue(event)}
                    onKeyDown={(event) => {this.enterPress(event)}}
                    className ="form" placeholder="Write a message...">
                </textarea>
                <button onClick = {() => {this.pressButton()}} className = 'btn btn-primary'>Send</button>
                </div>
    }
}




// onClick = {() => sendMessage(textarea.value)}
export default withMessageStoreService()(EntryField);