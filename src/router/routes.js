import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import App from '../App.js';

import HomePage from '../pages/home';
import DetailsPage from '../pages/details';
import RestaurantsPage from '../pages/restaurants';

const Routes = () => (
    <Router> 
        <App>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/restaurants' component={RestaurantsPage}/>
                <Route exact path='/restaurants/:rid' component={DetailsPage}/>
            </Switch>   
        </App>    
    </Router>
)

export default Routes;
