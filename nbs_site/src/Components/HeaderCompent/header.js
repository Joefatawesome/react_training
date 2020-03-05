import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';

import nbs_icon from '../../images_icons/nbs_icon.ico';

class Header extends Component {
    render() {
        return (
            <header>
                {/*<img src={nbs_icon} alt={'Logo'}>
                </img>*/}
                {/*<div className="logo">*/}
                {/*    LOGO*/}
                {/*</div>*/}
                <nav>
                    <ul>
                        <li className="first">
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/Products'>Products</Link>
                        </li>
                        <li className="last">
                            <Link to='/'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
