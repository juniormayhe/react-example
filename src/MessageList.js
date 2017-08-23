import React, {Component} from 'react';
import Message from './Message';
import AddMessage from './AddMessage';
import './MessageList.css';

class MessageList extends Component {
    constructor(props){
        super(props);
        this.state = { mensajes :[] };

        // cuando aparezca this en los metodos abajo, referir a this de la clase
        this.agregarMensajeEnLaLista = this.agregarMensajeEnLaLista.bind(this);
    }

    agregarMensajeEnLaLista(nuevoMensaje){
        console.log(nuevoMensaje);
        this.setState({ 
            mensajes: [...this.state.mensajes, nuevoMensaje] 
        });
    }

    componentDidUpdate(){
        alert(this.state.mensajes.length);
    }

    mostrarMensajes(){
        return this.state.mensajes.map((mensaje,index) => (
            <Message key={index} mensaje={mensaje}></Message>
        ));
    }

    render(){
        return (
            <div className="lista">
                <AddMessage agregarMensajeEnLaLista={this.agregarMensajeEnLaLista}/>
                {this.mostrarMensajes()}
            </div>
        )
    }
}

export default MessageList;