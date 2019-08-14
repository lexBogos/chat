import React, {Component} from 'react';

import './entry-field.css'

export default class EntryField extends Component {

    render(){
        return <div className = 'textareaContainer'>
                <textarea class="form-control" placeholder="Write a message..."></textarea>
                <button className = 'btn btn-primary'>Send</button>
                </div>
    }
}