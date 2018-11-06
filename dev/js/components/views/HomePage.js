import React from 'react';
import selectPage from '../../actions/index';
require('../../../scss/mygrid.scss');

const HomePage = () => (
    <div className="wrapper">
        <header className="header">
            <div className="logo" style={{justifySelf: 'center'}}>
                <i className="fas fa-laptop-code fa-3x"></i>
            </div>
            <nav className="mainNav">
                <ul className="main-nav-list" >
                    <li><a id = "active" href="mygrid.html">Home</a></li>
                    <li><a id = "projects" href="projects.html">Projects</a></li>
                    <li><a id = "resume" href="resume.html">Resume</a></li>
                    <li><a id = "contact" href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </header>
        
        <div className="mainContent">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorum fugiat id perspiciatis possimus. Omnis magnam dolores doloribus asperiores minus sequi, aspernatur possimus voluptatibus repellendus, 
            praesentium sunt porro officiis culpa labore.</p>

        </div>
        <footer className= "mainFooter" style={{alignSelf: 'flex-end'}}>
            <p>Click to <a id="email" href="mailto:ray.yoon87@gmail.com">Contact</a></p>
        </footer>
    </div>
);

export default HomePage;