import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import { Route, Redirect } from 'react-router-dom';


/**
 * Clase de prueba Fronted que simula un About
 */
export default class AboutV extends Component {

    displayName = AboutV.name


    constructor(props) {
        super(props);
        this.state = {
            isPermisiveAccess: true
        };
    }

    componentDidMount() {

        if (localStorage.getItem('user')) {
            console.log('Usuario logueado')
            this.setState({ isPermisiveAccess: true });

        } else {
            console.log('Usuario no logueado')
            this.setState({ isPermisiveAccess: false });

        }
        // const currentRoute = this.props.location.pathname;
        // if (currentRoute === '/login') {
        //     this.setState({ isNavbarHidden: true });
        // } else {
        // }
    }
    render() {

        if (!this.state.isPermisiveAccess) {
            return <Redirect to="/login" />;
        } else {
            return (
                <div>
                    <NavBar />

                    <h2>About </h2>
                    <p>
                        This project includes a working example of React, React Router, and TypeScript.
                    </p>
                </div>
            );
        }
    }
}