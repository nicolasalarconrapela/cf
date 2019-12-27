import React from 'react';

import { Route, Switch } from 'react-router';
import Login from './pages/login/LoginReact';
import { qq } from './pages/errors/404';

import DGV_Author from './pages/DGV/DGV_Author';
import DGV_Books from './pages/DGV/DGV_Books';
import DGV_Loan from './pages/DGV/DGV_Loan';
import HomeBlank from './pages/HomePage/HomeBlank';
import About from './pages/About/About';
import DGV_User from './pages/DGV/DGV_User';
/**
 * # RouteMap
 * 
 * Contiene el mapeo de las principales URL's del proyecto :+
 * - LOGIN => /login
 *      - Welcome => /homeblank
 *      - DGV's
 *          - Author => /author
 *          - Book   => /book
 *          - Loan   => /loan
 *      - About => /about
 *      
 */
export const RouteMap = () => (
    <div>

        <Switch>

            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />

            <Route path="/homeblank" component={HomeBlank} />
            <Route path="/home" component={HomeBlank} />
            {/* --------------------------- About --------------------------- */}
            <Route path="/about" component={About} />
            {/* --------------------------- DGV --------------------------- */}
            {/* AUTHOR */}
            <Route path="/author" exact component={DGV_Author} />
            {/* BOOKS */}
            <Route path="/book" exact component={DGV_Books} />
            {/* LOAN */}
            <Route path="/loan" exact component={DGV_Loan} />
            {/* USERS */}
            <Route path="/users" exact component={DGV_User} />
            {/* --------------------------- 404 --------------------------- */}
            {/* ROUTE 404 */}
            <Route path="/404" component={qq} />
            <Route component={qq} />
        </Switch>
    </div>
);