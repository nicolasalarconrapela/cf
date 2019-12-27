import React from 'react';

/**
 * Clase que nos implementa la salida del usuario
 * @author NAR
 * @version 1.0.0
 * @since 20.B
 */

export default class Logout extends React.Component {
    logoutHandler = (e) => {
        console.log('Limpiando storage')
        localStorage.removeItem('user');

    }
    render() {
        return (
            <li>
                <a href="/login" onClick={e => this.logoutHandler(e)} >Logout</a>
            </li>
        );
    }
}
