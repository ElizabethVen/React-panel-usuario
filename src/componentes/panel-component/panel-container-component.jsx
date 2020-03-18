import React from 'react';
import AddUserComponent from '../add-user-component/add-user-component';
import SearchUser from '../search-user-component/search-user-component';


export default function PanelContainer(){
    return(
        <div>
            <h2>Panel Container</h2>
            <AddUserComponent />
            <SearchUser />
        </div>
        
    );
}