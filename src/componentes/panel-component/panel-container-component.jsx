import React from 'react';
import AddUserComponent from '../add-user-component/add-user-component';
import SearchUser from '../search-user-component/search-user-component';


export default function PanelContainer(){
    return(
        <div className='contenedor'>
            <div>
            <AddUserComponent />
            </div>
            <div>
            <SearchUser />
            </div>
            
        </div>
        
    );
}