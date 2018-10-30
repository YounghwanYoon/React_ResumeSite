import React from 'react';
import UserList from '../containers/project-list';
import UserDetails from '../containers/user-detail';
require('../../scss/mygrid.scss');

const App = () => (
    <div>
        <div id = "leftPanel">
            <h2 id ='leftPanel_Title'>Project List:</h2>
            <UserList />
        </div> 
        <div id ="rightPanel">
            <h2>Details</h2>
            <UserDetails />
        </div>
    </div>
);

export default App;
