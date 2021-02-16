import React, {Component} from 'react';
import './App.css';
import Main from './componenAdiwiyata/main';
import {Link} from 'react-router-dom';


class App extends Component {
  render(){
    return (  
      <div className="row">
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-item nav-link" to="/">Beranda</Link>
              <Link class="nav-item nav-link" to="/gallery">Gallery</Link>
              <Link class="nav-item nav-link" to="/kalender">Kalender</Link>
              <Link class="nav-item nav-link" to="/agenda">Agenda</Link>
            </div>
          </div>
        </nav>
        <div className="row">
                    <div className="col"></div>
                        <Main />
        </div>
      </div>
    );
  }  
} 

export default App;  

