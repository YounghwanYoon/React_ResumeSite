import React from 'react';
import UserList from '../../containers/project-list';
import UserDetails from '../../containers/user-detail';
require('../../scss/mygrid.scss');

const Projects = () => (
    <div className="Wrapper">
        <header className="header">
            <div className="logo" style={{justifySelf: 'center'}}>
                <i className="fas fa-laptop-code fa-3x"></i>
            </div>
            <nav className="mainNav">
                <ul className="main-nav-list" >
                    <li><a id = "home" onclick = "this.activeNaviButton" href="/HomePage">Home</a></li>
                    <li><a id = "active" onclick = "activeNaviButton(this)" href="/">Projects</a></li>
                    <li><a id = "resume" onclick = "activeNaviButton(this)" href="/resume">Resume</a></li>
                    <li><a id = "contact" onclick = "activeNaviButton(this)" href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        <div className="mainContent"> 
            <div id = "leftPanel">
                <h2 id ='leftPanel_Title'>Project List:</h2>
                <UserList />
            </div> 
            <div id ="rightPanel">
                <h2>Details</h2>
                <UserDetails />
            </div>
        </div>
        <footer className= "mainFooter" style={{alignSelf: 'flex-end'}}>
            <p>Click to <a id="email" href="mailto:ray.yoon87@gmail.com">Contact</a></p>
        </footer>
    </div>
);

export default Projects;
