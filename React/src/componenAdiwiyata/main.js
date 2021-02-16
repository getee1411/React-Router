import React, {Component} from 'react'
import {Switch,Route} from 'react-router-dom'

import Beranda from './beranda'
import Gallery from './gallery'
import Kalender from './kalender'
import Agenda from './agenda'

const Main = () => (
    <Switch>
        <Route exact path="/" component={Beranda}/>
        <Route exact path="/gallery" component={Gallery}/>
        <Route exact path="/kalender" component={Kalender}/>
        <Route exact path="/agenda" component={Agenda}/>
    </Switch>
)

export default Main