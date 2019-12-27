import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

import Navbar from '../NavBar/NavBar';
import DGV_Loan from '../DGV/DGV_Loan';
import DGV_Books from '../DGV/DGV_Books'
import DGV_Author from '../DGV/DGV_Author'
/**
 * Clase principal
 */
export default class HomeBlank extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Navbar />
                        <p>Welcome :)</p>
                        {/* AUTHOR */}
                        <Route path="/author" exact component={DGV_Author} />
                        {/* BOOKS */}
                        <Route path="/book" exact component={DGV_Books} />
                        {/* LOAN */}
                        <Route exact path="/loan" component={DGV_Loan} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}