import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';  

import Logon from './pages/Logon';
import DashBoard from './pages/DashBoard';
import Register from './pages/Register';
import Password from './pages/Password';
import CadOS from './pages/CadOS'
export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} /> 
                <Route path="/dashboard" component={DashBoard} />    
                <Route path="/register" component={Register} /> 
                <Route path="/password" component={Password} />  
                <Route path="/cadOS" component={CadOS} />          
            </Switch>
        </BrowserRouter>
    );
}

