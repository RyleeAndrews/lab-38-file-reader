
import './style/main.scss';

import React from 'react';
import {Route} from 'react-router-dom';
import Home from './home.js';
import Profile from './profile/profileDashboard.js';

import Category from './category/catDashboard.js';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>


                <main>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/category' component={Category} />
                    <Route path='/profile' component={Profile} />
                </main>
            </React.Fragment>
        )
    }
}

export default App;
