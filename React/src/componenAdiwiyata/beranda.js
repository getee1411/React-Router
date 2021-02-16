import React, { Component } from 'react'
import MyNav from './mynav'
import MyBox from './box'

class Beranda extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <MyBox type="col-md-8 mx-auto " css="box-horizontal" title="ADIWIYATA">
                        <p>Adiwiyata adalah upaya membangun program atau wadah yang
                        baik dan ideal untuk mendapatkan ilmu pengetahuan dan berbagai
                        norma serta etika yang dapat menjadi dasar manusia menuju terciptanya
                        kesejahteraan hidup untuk Cita-cita pembangunan berkelanjutan. Adiwiyata
                        merupakan nama program pendidikan lingkungan hidup.</p>
                    </MyBox>
                </div>
                <div className="row">
                    <MyBox type="col-md-4 mx-auto" css="box-vertical">
                        <img src="adiwiyata.jpg" alt="logo adiwiyata"/>
                    </MyBox>
                </div>
            </div>
        )
    }
}

export default Beranda