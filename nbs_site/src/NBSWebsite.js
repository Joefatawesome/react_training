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
