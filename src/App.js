import React, { Component } from 'react';
import './App.css';
import Header from './componentes/header/header-component';
import PanelContainer from './componentes/panel-component/panel-container-component';
import CardContainer from './componentes/card-container-component/card-container-component';

//import {CardContainer} from './components/card-container/card-container-component';

function App() {
  return (
    <div className='container'>
      <Header />
      <PanelContainer />
      <CardContainer />
    </div>
  );
}

export default App;
