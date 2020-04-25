import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ClientForms extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>
                    Forms and Downloads
                </h1>
                <ul>
                    <li className="first">
                        <Link to='$'>Personal Organizer</Link>
                    </li>
                    <li>
                        <Link to='$'>Business Organizer</Link>
                    </li>
                    <li>
                        <Link to={'$'}>Law Enforcement Organizer</Link>
                    </li>
                    <li>
                        <Link to={'$'}>Realtor's Business Organizer</Link>
                    </li>
                    <li className="last">
                        <Link to='$'>Questionnaire</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ClientForms;
