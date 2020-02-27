import React, {Component} from 'react';
import logo from './images_icons/nbs_icon.ico'
import COMPANY_NAME from './common/StringConstants.js';
import Header from './Components/HeaderCompent/header';
import Footer from "./Components/FooterComponent/footer";
import HomePage from "./Components/Pages/homePage";
import './Assets/css/default.min.css';

class NBSWebsite extends Component {
    render() {
        return (
            <div className="NBSWebsite">
                <Header />
                    <HomePage />
                <Footer />
            </div>
        );
    }
}

export default NBSWebsite;
