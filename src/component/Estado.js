import React, { Component } from "react";
import { render } from "react-dom";

/**
 * Un componentese repinta si se cambia de estado, por lo tanto en el estado se debe almacenar lo que quiero cambiar dinámicamente.
 * El estado en una clase se hace con this.state y es un objeto inmutable.
 * Solo se puede modificar con un método especial llamado serState()
 */
export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }
  render() {
    return (
      <>
        <h1>Componente Estado</h1>
        <h2>{this.state.contador}</h2>
      </>
    );
  }
}


//que el contandor aumento un 1 cada segunso con el setIntervale