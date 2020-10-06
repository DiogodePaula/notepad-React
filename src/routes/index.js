import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './routeWrapper';

import Login from '../pages/login/index';
import HomeCard from '../pages/homeCards/index';

export default() => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact isPrivate component={HomeCard} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </BrowserRouter>
    );
};