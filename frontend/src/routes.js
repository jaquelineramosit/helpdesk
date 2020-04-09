import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';  

import Logon from './pages/Logon';
import DashBoard from './pages/DashBoard';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} /> 
                <Route path="/dashboard" component={DashBoard} />               
            </Switch>
        </BrowserRouter>
    );
}

