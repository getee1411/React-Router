import React, {Component} from 'react';
import './App.css';
import Utama from './Components/Utama';
import {Link} from 'react-router-dom';


class App2 extends Component {
  render(){
    return (  
      <div className="row">
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-item nav-link" to="/">Beranda</Link>
              <Link class="nav-item nav-link" to="/TentangSaya">Tentang Saya</Link>
              <Link class="nav-item nav-link" to="/Karya">Karya</Link>
              <Link class="nav-item nav-link" to="/Kontak">Kontak</Link>
              <Link class="nav-item nav-link" to="/Gallery">Gallery</Link>
              <Link class="nav-item nav-link" to="/Cart">Keranjang</Link>
            </div>
          </div>
        </nav>
          <Utama />
      </div>
    );
  }  
} 

export default App2;  

