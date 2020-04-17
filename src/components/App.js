import React from 'react'
import Home from './Home'
import Footer from './Footer'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <div className="main">
                                <Home />
                                <Footer />
                            </div>
                        </Route>
                        <Route exact path="/cv">
                            <div className="iframe">
                                <iframe title="taner akhan cv" src="https://www.borzmotor.com/other/index.html"></iframe>
                            </div>
                        </Route>
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}
