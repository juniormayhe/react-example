import React, {Component} from 'react';
import './AddMessage.css'

class AddMessage extends Component {
    constructor(props){
        super(props);
        this.state = {mensaje: ''};
        
        
        // cuando aparezca this en los metodos abajo, referir a this de la clase
        this.recibirMensaje = this.recibirMensaje.bind(this);
        this.incluirMensaje = this.incluirMensaje.bind(this);
    }

    recibirMensaje(event){
        this.setState({ mensaje: event.target.value });
    }

    incluirMensaje(event) {
        this.props.agregarMensajeEnLaLista(this.state.mensaje);
        this.setState({ mensaje: '' });
        console.log(this.state);
    }

    render(){
        return (
            <div className="mensaje">
                <input type="text" 
                    onChange={this.recibirMensaje}
                    />
                &nbsp;
                <button onClick={this.incluirMensaje}>
                    Agregar mensaje
                </button>
            </div>
        );
    }
}

export default AddMessage;