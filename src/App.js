import React, { Component } from 'react';
import './App.css';
import Header from './componentes/header/header-component';
import PanelContainer from './componentes/panel-component/panel-container-component';
import CardContainer from './componentes/card-container-component/card-container-component';
import Container from '@material-ui/core/Container';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      //Clave: valor
      personas: [], 
        nombre: "",
        buscarPersona: "",
        respaldoPersonas: []
      }
    //this.saludo = this.saludo.bind(this)
    }
    // la respuesta de la consulta a la API se guarda en response y se convierte a formato JSON
    // despues eso se guarda en arregloPersonas y el estado personas se iguala a arregloPersonas
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // convierte la respuesta a formato json posteriormente la guardamos en arregloPersonas
      //Nos permite modificar el estado setState
      .then(arregloPersonas => {
        this.setState({personas : arregloPersonas});
        this.setState({respaldoPersonas: arregloPersonas});
        }
      )
    }

    //Al utilizar las funciones de flecha el contexto será el mismo en el que se declaró
    agregarTarjeta = () => {
      let personasModificadas = this.state.personas; /*se va a capturar en una variable el valor que tiene el arreglo personas*/ 
      let arregloIndices = this.state.personas.map( persona => persona.id);
      let indice = arregloIndices[arregloIndices.length-1]+1;

      /*agregaremos a personas modificadas un elemento*/
        personasModificadas.push({
        "id": indice,
        "name": this.state.nombre,
        "username": "Bret",
        "email": "Sincere@april.biz",
      });
      /*para poder manipular el estado usaremos setState le pasaremos al arreglo perSonas lo que contiene personasModificadas*/
      /*React no permite manipular los estados directamente por eso se creo el arreglo personasModificadas*/
      this.setState({personas: personasModificadas});
      this.setState({respaldoPersonas: personasModificadas});
    }
    //saludo = () =>{
    //  alert("hola mundo"); 
    //  console.log(this.state.nombre);   Esto imprime Oscar en consola
    //}
  
    //saludo(){
    //  Recuerda colocar el bind(this) dentro del constructor
      //this.saludo = this.saludo.bind(this);
      //console.log(this.state.nombre);
     //}
  //
  obtenerPersona = (event) => {
    /*cada vez que se haga un cambio en el textfield se guardara en el state en el atributo nombre*/
    this.setState({nombre: event.target.value});
  }

  buscarPersona = (event) => {
    // Crear variable para guardar todas las personas que actualmente estan en la aplicacion
    // Y para asi poder trabajar con el arreglo
    let respaldoPersonas= this.state.respaldoPersonas;
    // Voy a filtrar el arreglo para que me regresen las personas que cumplan con la expresion
    // persona.name.includes(event.target.value)
    let arregloPersonasModificadas = respaldoPersonas.filter(persona => persona.name.includes(event.target.value));
    // En este punto voy a actualizar el estado por el arreglo personas filtradas
    this.setState({personas: arregloPersonasModificadas});
    //console.log(respaldoPersonas);
  }

  borrarPersona = (event, id) => {
    //Obtenemos el indice donde se encuentra el id de la persona que queremos borrar
    let getPersonaIndex = this.state.personas.find(persona => persona.id ===id);
    //Creamos una copia del arreglo para poder manipularlo posteriormente
    let arregloPersonas = this.state.personas;
    //Eliminamos el elemento dentro del arreglo 
    arregloPersonas.splice(getPersonaIndex,1);
    //Agregamos el nuevo estado para personas
    this.setState({personas: arregloPersonas});
  }

  render (){
    return (
      <Container maxWidth="lg">
        <Header />
        { /* <PanelContainer funcionSaludo={this.saludo}/> */ } 
        <PanelContainer 
          funcionAgregar={this.agregarTarjeta} 
          funcionObtenerPersona = {this.obtenerPersona}
          funcionBuscarPersona = {this.buscarPersona}
        />
        <CardContainer 
          personas = {this.state.personas}
          funcionBorrarPersona={this.borrarPersona}
        />
        {/*<button onClick={ () => alert("Hello world")}>Boton Ejemplo</button>*/}
      </Container> 
    )
  }
}

