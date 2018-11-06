import React from 'react';
import UserList from '../containers/project-list';
import UserDetails from '../containers/user-detail';


// You can choose your kind of history here (e.g. browserHistory)
import { Router, hashHistory as history } from 'react-router';
import routes from './routes';

/*
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';
*/
import HomePage from './HomePage';
import Projects from './Projects';


require('../../scss/mygrid.scss');

const App = () => (
    
    <HomePage/>

    //<Router routes={routes} history={history} />
);

export default App;