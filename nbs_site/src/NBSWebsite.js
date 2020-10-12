import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Header from './Components/HeaderComponent/header';
import Margin from "./Components/MarginComponent/margin";
import Footer from "./Components/FooterComponent/footer";
import HomePage from "./Components/Pages/homePage";
import News from "./Components/Pages/newsPage";
import ClientForms from "./Components/Pages/clientForms";
import AboutUs from "./Components/Pages/aboutUs";
import ContactInfo from "./Components/Pages/contactInfo";

import './Assets/scss/default.scss';

class NBSWebsite extends Component {
    render() {
        return (
            <Router>
                {/*<div className="margin">*/}
                {/*    <Margin>*/}
                {/*        Hello World*/}
                {/*    </Margin>*/}
                {/*</div>*/}
                <div className="NBSWebsite">
                    <Header/>
                        <Route exact path='/' component={HomePage}/>
                        <Route exact path='/News' component={News}/>
                        <Route exact path='/Forms' component={ClientForms}/>
                        <Route exact path='/About' component={AboutUs}/>
                        <Route exact path='/Contact' component={ContactInfo}/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default NBSWebsite;
