import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {

  constructor(){
    super();
    this.state = {categorias: []}

    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias){
    console.log(categorias)
    this.setState({...this.setState, categorias})
  }

    _handleEventoInput(e) {
        console.log(e.key);
        if(e.key === "Enter"){
            // console.log("Adicionar categoria");
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            return <li key={index} className="lista-categorias_item">{categoria}</li>
          })}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar Categoria"
          onKeyUp= {this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
