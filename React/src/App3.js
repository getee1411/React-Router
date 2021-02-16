import React, {Component} from 'react';
import './App.css';
import MyBelanja from './componenKeranjang/mainbelanja';
import {Link} from 'react-router-dom';


class App2 extends Component {
  render(){
    return (  
      <div className="row">
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-item nav-link" to="/">Beranda</Link>
            </div>
          </div>
        </nav>
        <div className="row">
                    <div className="col">
                        <MyBelanja />
                    </div>
        </div>
      </div>
    );
  }  
} 

export default App2;  

