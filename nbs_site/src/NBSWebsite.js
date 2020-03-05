import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Header from './Components/HeaderCompent/header';
import Footer from "./Components/FooterComponent/footer";
import HomePage from "./Components/Pages/homePage";
import Products from "./Components/Pages/products";

import './Assets/css/default.min.css';
import logo from './images_icons/nbs_icon.ico'
import COMPANY_NAME from './common/StringConstants.js';

class NBSWebsite extends Component {
    render() {
        return (
            <Router>
                <div className="NBSWebsite">
                    <Header/>
                        <Route exact path='/' component={HomePage}/>
                        <Route exact path='/Products' component={Products}/>

                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default NBSWebsite;
