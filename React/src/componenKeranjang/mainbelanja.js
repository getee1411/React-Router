import React, {Component} from 'react'
import {Switch,Route} from 'react-router-dom'

import Belanja from './belanja'

const MyBelanja = () => (
    <Switch>
        <Route exact path="/" component={Belanja}/>
    </Switch>
)

export default MyBelanja