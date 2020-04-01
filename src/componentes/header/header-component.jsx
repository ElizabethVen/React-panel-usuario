import React from 'react';
import ButtonIniciarSesion from '../header/button/button-iniciar-sesion';
import '../header/header-component-styles.css';

export default function Header(){
    return(
    <div>
        <header className= "contenedor">
            <h3>ACADEMLO</h3>
            <h1>Panel de Usuarios</h1>
            <ButtonIniciarSesion />
        </header>
        <hr className="largo"></hr>
    </div>
    
    );
};

