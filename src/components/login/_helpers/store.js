import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';

const loggerMiddleware = createLogger();

/**
 * ## store
 * 
 * Clase principal para :
 * * Loguearse/Registrarse.
 * * Configurar el backend.
 * 
 * @author NAR
 * @version 1.0.1
 * @since 18.1
 */
export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);