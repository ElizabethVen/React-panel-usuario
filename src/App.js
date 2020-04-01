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
      //key/ value
      personas: [
        {
          nombre: "juanita",
          email: "correo@gmail.com"
        },
        {
          nombre: "Pedrito",
          email: "correo@gmail.com"
        }
      ]
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(arregloPersonas => this.setState({personas : arregloPersonas}))
  }

  render (){
    return (
      <Container maxWidth="lg">
        <Header />
        <PanelContainer />
        <CardContainer personas= {this.state.personas}/>
      </Container> 
    )
  }
}

