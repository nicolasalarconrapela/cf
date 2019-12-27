import React, { Component } from 'react';
import './404.css'
import { Link } from 'react-router-dom';

import { LoginPage } from '../login/LoginPage/LoginPage';
/**
 * Clase que nos muestra cuando es 404
 */
export class qq extends Component {
    displayName = qq.name



    render() {
        // const qqcss = {
        //     background: 'red',
        //     color: 'white',
        //     padding: '14em',
        // };
        return (
            // <body style={qqcss} className="qqcss">
            <body className="qqcss">
                <div>
                    <h2>404</h2>
                    <h3>Page not found</h3>
                    {/* No funciona el redirect */}
                    <a href="/">Return</a>
                </div>
            </body>
        );
    }
}