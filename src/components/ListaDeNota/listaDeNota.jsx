import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
  constructor(props) {
    super(props);
    this.state = {notas: []};

    this._novasNotas= this._novasNotas.bind(this);
  }

  componentDidMount(){
    this.props.notas.inscrever(this._novasNotas);
  }

  componentWillUnmount(){
    this.props.notas.desinscrever(this._novasNotas);
  }

  _novasNotas(notas){
    this.setState({...this.state, notas})
  }

  render() {
    return (
      <ul className="lista-notas">
        {/* {Array.of("Trabalho", "Trabalho", "Estudo").map((categoria, index) => { */}
        {this.state.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
                {/* <div>{categoria}</div> */}
              <CardNota
              indice={index}
              apagarNotas={this.props.apagarNotas} 
              titulo={nota.titulo} texto={nota.texto}
              categoria={nota.categoria}
              />
            </li>
          );
        })}
        {/* <li>
          <CardNota />
        </li>
        <li>
          <CardNota />
        </li>
        <li>
          <CardNota />
        </li> */}
      </ul>
    );
  }
}

export default ListaDeNotas;
