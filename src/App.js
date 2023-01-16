import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNota";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/app.css";
import './assets/index.css';
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";

class App extends Component {

  constructor(){
    super();
    // this.notas = [];

    // this.state = {
    //   notas: [],
    //   // foi criado um novo arquivo categoria em dados
    //   // categorias: []
    // }

    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  // criarNota(titulo, texto, categoria){
  //   const novaNota = {titulo, texto, categoria};
  //   const novoArrayNotas = [...this.state.notas, novaNota]
  //   const novoEstado = {
  //     notas: novoArrayNotas
  //   }
  //   // this.notas.push(novaNota);

  //   this.setState(novoEstado)

  //   // this.setState({
  //   //   notas: this.notas
  //   // })
  //   console.log(`uma nova nota foi criada ` + titulo + " " + texto)
  //   // console.log(this.notas.length)
  // }

// essa função está sendo passada para categorias da pasta dados
  // adicionarCategoria(nomeCategoria){
  //   const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
  //   const novoEstado = {...this.state, categorias: novoArrayCategorias}

  //   this.setState(novoEstado)
  // }

  // deletarNota(index){
  //   let arrayNotas = this.state.notas;
  //   arrayNotas.splice(index,1);
  //   this.setState({notas: arrayNotas})
  //   console.log("deletar")
  // }
  
  render() { 
    return ( 
      <section className="conteudo">
        <FormularioCadastro categorias={this.categorias} criarNota={this.notas.adicionarNota.bind(this.notas)}/>
        <main className="conteudo-principal">
          <ListaDeCategorias adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)} categorias={this.categorias}/>
          <ListaDeNotas 
          apagarNotas={this.notas.apagarNotas.bind(this.notas)}
          notas={this.notas}/>
        </main>
      </section>
     );
  }
}
 
export default App;
