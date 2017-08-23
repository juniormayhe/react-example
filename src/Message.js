import React, {Component} from 'react';
import './Message.css';

class Message extends Component {
    constructor(props){
        super(props);
        this.state = { mensaje: ''};
    }

    render() {
        return (
            <div className="mensaje">
                <i>{this.props.mensaje}</i>
            </div>
        );
    }
}

export default Message;