import React, {Component} from 'react';
import {Link} from "react-router-dom";

class News extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>
                    Recent Newsletters
                </h1>
                <ul>
                    <li className="first">
                        <Link to='$'>Unemployment for Self Employed Individuals</Link>
                    </li>
                    <li>
                        <Link to='$'>Economic Stimulus Payment Site for Filers and Non-Filers</Link>
                    </li>
                    <li>
                        <Link to={'$'}>Economic Injury Disaster Loan Application</Link>
                    </li>
                    <li>
                        <Link to={'$'}>California Pandemic Unemployment Assistance</Link>
                    </li>
                    <li className="last">
                        <Link to='$'>IRS Mail Scams 10-13-2016</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default News;
