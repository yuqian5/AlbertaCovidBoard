import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Route, Switch, HashRouter as Router} from 'react-router-dom';

import General from "./Component/General/General";
import Navbar from "./Component/NavBar/NavBar";

ReactDOM.render(
    <Router>
        <div>
            <Navbar />

            <div className='mainPage'>
                <Switch>
                    <Route exact path="/" component={General} />
                </Switch>
            </div>
        </div>
    </Router>,

  document.getElementById('root')
);