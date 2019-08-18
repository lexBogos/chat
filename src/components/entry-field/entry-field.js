import React, {Component} from 'react';
import withMessageStoreService  from '../hoc';
import '../../services/messegestore-service';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'



import './entry-field.css'

 class EntryField extends Component {

    state = {
        inputValue: '',
        field:'',
        visible: {display: 'none'} 
      };
    myRef = React.createRef()
    emojiRef = React.createRef() 
    


    updateInputValue = (event) => {
            console.log(this.state)
            this.setState({
              inputValue: event.target.value,
            //   field: event.target
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
 
    addEmoji = (e) => {
                console.log(e.native)
                let emoji = e.native;
                console.log(this.state.inputValue)
                this.setState({
                    inputValue: this.state.inputValue + emoji
                })
              }
            
    openEmoji = () => {
       if(this.state.visible.display === 'none'){
            this.setState({visible: {display: 'block'}}) 
       }
       else{this.setState({visible: {display: 'none'}})}
        
        
        // console.log(this.emojiRef.current)
              }

    componentDidMount(){
        this.setState({field:this.myRef.current})
        // console.log(this.emojiRef.current)
        // this.emojiRef.current.style = {display: 'none'}
                     
                }



    render(){
        return <>
                <div className = 'picker'>
                    <Picker onSelect={this.addEmoji} style={this.state.visible} ref={this.emojiRef} />
                </div>
                <div className = 'textareaContainer'>
                <div className='composerEmoji' onClick = {this.openEmoji}><span>Emoji</span></div>
                <textarea
                    ref={this.myRef}
                    value = {this.state.inputValue}
                    onChange = {(event) => this.updateInputValue(event)}
                    onKeyDown={(event) => {this.enterPress(event)}}
                    className ="form" placeholder="Write a message...">
                </textarea>
                <button onClick = {() => this.pressButton()} className = 'buttonSend'>Send</button>
                </div>
                </>
    }
}




// onClick = {() => sendMessage(textarea.value)}
export default withMessageStoreService()(EntryField);