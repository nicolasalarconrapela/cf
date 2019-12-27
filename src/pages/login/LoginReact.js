import React from 'react';
import { Provider } from 'react-redux';

import { App } from './App/index';
import { store } from '../../components/login/_helpers/index';

import { configureFakeBackend } from '../../components/login/_helpers/index';

/**
 * # Login
 * 
 * Clase principal para :
 * * Loguearse/Registrarse.
 * * Configurar el backend.
 * 
 * @author NAR
 * @version 1.0.3
 * @since 18.2
 */
export default class LoginReact extends React.Component {
    displayName = LoginReact.name
    /** constructor */
    constructor(props) {
        super(props);
        configureFakeBackend();

        /** Configuracion de Backend*/
    }

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}