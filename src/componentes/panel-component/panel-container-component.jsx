import React from 'react';
import AddUserComponent from '../add-user-component/add-user-component';
import SearchUser from '../search-user-component/search-user-component';


export default function PanelContainer(props){
    return(
        <div className='contenedor'>
            <div>
            <AddUserComponent 
                funcionAgregar={props.funcionAgregar} 
                funcionObtenerPersona={props.funcionObtenerPersona}
                funcionObtenerEmail = {props.funcionObtenerEmail}
                nombre={props.nombre}
                email={props.email}
                validacion={props.validacion} 
                mensajeError={props.mensajeError}
            />
            </div>
            <div>
            <SearchUser funcionBuscarPersona={props.funcionBuscarPersona}/>
            </div>
            
        </div>
        
    );
}