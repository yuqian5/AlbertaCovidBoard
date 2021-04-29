import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Route, Switch, HashRouter as Router} from 'react-router-dom';

import Navbar from "./Component/NavBar/NavBar";
import General from "./Component/General/General";
import RValues from "./Component/RValues/RValues";
import Variants from "./Component/Variants/Variants";
import Misc from "./Component/Misc/Misc";

ReactDOM.render(
    <Router>
        <div>
            <Navbar />

            <div className='mainPage'>
                <Switch>
                    <Route exact path="/" component={General} />
                    <Route exact path="/RValues" component={RValues} />
                    <Route exact path="/Variants" component={Variants} />
                    <Route exact path="/Misc" component={Misc} />
                </Switch>
            </div>

            <footer className="pt-4 my-md-5 pt-md-5 border-top">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-2" style={{textAlign: "center"}}>
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Cool stuff</a></li>
                            <li><a className="text-muted" href="#">Random feature</a></li>
                            <li><a className="text-muted" href="#">Team feature</a></li>
                            <li><a className="text-muted" href="#">Stuff for developers</a></li>
                            <li><a className="text-muted" href="#">Another one</a></li>
                            <li><a className="text-muted" href="#">Last time</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2" style={{textAlign: "center"}}>
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Resource</a></li>
                            <li><a className="text-muted" href="#">Resource name</a></li>
                            <li><a className="text-muted" href="#">Another resource</a></li>
                            <li><a className="text-muted" href="#">Final resource</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2" style={{textAlign: "center"}}>
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Team</a></li>
                            <li><a className="text-muted" href="#">Locations</a></li>
                            <li><a className="text-muted" href="#">Privacy</a></li>
                            <li><a className="text-muted" href="#">Terms</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </footer>
        </div>
    </Router>,

  document.getElementById('root')
);