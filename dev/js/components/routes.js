import React from 'react';
import { Route, IndexRoute } from 'react-router';
//https://medium.com/@krithix/multi-page-website-with-react-in-2017-f6f2af326526
/**
 * Import all page components here
 */
import App from './App';
import HomePage from './views/HomePage';
import Projects from './views/Projects';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default routes =>()=>{
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/dev/js/components/Projects.js" component={Projects} />
    <Route path="/dev/js/components/HomePage.js" component={HomePage} />
  </Route>
};