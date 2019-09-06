import React, {Component, Fragment} from 'react';
import Header from './components/Header';
import Noticias from './components/Noticias';
import Formulario from './components/Formulario';

class App extends Component {
  state = {
    noticias: []
  }
  //Se ejecuta cuando el doc esta listo
  componentDidMount(){
    this.consultarNoticias() ;
  }

  consultarNoticias = async (categoria ='general') =>{
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=07a53d6af61a44cb8ecbc781ccfd9920`
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    this.setState({
       noticias: noticias.articles
    });
  }
  render(){
    return (
      <Fragment>
        <Header
          titulo='Noticias'
        />
        <div className="container white contenedor-noticias">
          <Formulario
              consultarNoticias = {this.consultarNoticias}
          />
          <Noticias 
              noticias = {this.state.noticias}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
