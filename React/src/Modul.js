import React, { Component } from 'react';
import Utama from './component/utama'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-item nav-link" to="/">Beranda</Link>
              <Link class="nav-item nav-link" to="/tentangsaya">Tentang Saya</Link>
              <Link class="nav-item nav-link" to="/karya">Karya</Link>
              <Link class="nav-item nav-link" to="/kontak">Kontak</Link> <hr />
              <Link to="/list" className="nav-link">List</Link> 
            </div>
          </div>
        </nav>
        <br />
        <p><Utama/></p>
      </div>
    )
  }
}

export default App;
