import React, { Component } from "react";
import { render } from "react-dom";

/**
 * Hay dos formas de crear un componente:
 * Componente de clases
 * Componente de función
 */

//Componente de clases:
/* 
class Componente extends Components{
    render(){
        return (<h1>Mi primer componente</h1>);
    }
}

*/

//Componente de funcional:

/* function Componente(){
    return (<h1>Mi primer componente</h1>);
} */

//Otra forma de expresar el componente funcional
/* const Componente = (props) => (
<h1>Mi primer componente {this.props.nombre} </h1>); */

/* class Componente extends Component {
    constructor(props) {
    super(props);
    this.nombre = props.nombre;
  }
  render() {
    return <h1>Mi primer componente {this.nombre} </h1>;
  }
} */

class Componente extends Component {
  constructor(props) {
    super(props);
    this.nombre = props.nombre;
    this.meses = props.meses;
    this.objeto = props.objeto;
  }

  render() {
    return (
      <>
        <h1>Mi primer Componente</h1>
        <ol>
          {this.props.meses.map((index, mes) => 
            <li key={index}>{mes}</li>
          )}
        </ol>
      </>
    );
  }

}

export default Componente;
