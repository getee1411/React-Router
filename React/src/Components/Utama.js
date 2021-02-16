import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './Beranda';
import TentangSaya from './TentangSaya';
import Karya from './Karya';
import Kontak from './Kontak';
import Gallery from './Gallery';
import Cart from './Cart';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda}/>
        <Route exact path="/tentangsaya" component={TentangSaya}/>
        <Route exact path="/karya" component={Karya}/>
        <Route exact path="/kontak" component={Kontak}/>
        <Route exact path="/gallery" component={Gallery}/>
        <Route exact path="/cart" component={Cart}/>
    </Switch>
)

export default Utama;