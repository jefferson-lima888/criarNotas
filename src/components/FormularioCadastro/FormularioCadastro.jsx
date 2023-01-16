import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria"

    this.state = {categorias: []}

    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount(){
    // const referenciaNovaCategoria = this._novasCategorias.bind(this);
    this.props.categorias.inscrever(this._novasCategorias);

    // this.props.categorias.desinscrever(referenciaNovaCategoria);
  }

  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias){
    this.setState({...this.state, categorias})
  }

  _handleMudancaCategoria(evento){
    evento.stopPropagation();
    this.categoria = evento.target.value
  }
 
  _handleMudancaTitulo(evento){
    evento.stopPropagation();

    // console.log(evento.target.value)
    this.titulo = evento.target.value

    console.log('title', this.titulo)
  }

  _handleMudancaTexto(evento){
    evento.stopPropagation();
    this.texto = evento.target.value
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
    console.log(`uma nova nota foi criada ` + this.titulo + " " + this.texto)
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <select onChange={this._handleMudancaCategoria.bind(this)} className="form-cadastro_input">
          <option>Sem categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>
          })}
        </select>
        <input type="text" placeholder="Título" className="form-cadastro_input" onChange={this._handleMudancaTitulo.bind(this)}/>
        <textarea rows={15} placeholder="Escreva sua nota..." className="form-cadastro_input"  onChange={this._handleMudancaTexto.bind(this)}/>
        <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
