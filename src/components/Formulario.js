import React, {Component} from 'react';

class Formulario  extends Component {
    state = {
        categoria:''
    }

    cambiarCategoria = e => {
        this.setState({
            categoria: e.target.value
        }, ()=>{
            // Pasar resultado al padre
            this.props.consultarNoticias(this.state.categoria)
        })
    }

    componentDidMount(){
        this.setState({
            categoria: 'general'
        })
    }

    render(){
        return(
            <div className="buscador row">
                <div className="col s12 m8 offset-2">
                    <form>
                        <h2 className="text-center">Buscar por categoria</h2>
                        <div className="input-field col s12 m8">
                            <select
                                onChange={this.cambiarCategoria}
                            >
                                <option value="general">General</option>
                                <option value="business">Negocios</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnologia</option>
                                <option value="science">Ciencia</option>
                                <option value="health">Salud</option>
                                <option value="entertainment">Entretenimiento</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default Formulario;