import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * ## PrivateRoute
 * 
 * "_Verifica si el usuario está conectado, de lo contrario, lo redirige a la página `/login`._
 * 
 * _La forma en que verifica si el usuario ha iniciado sesión es verificando que haya un objeto de `user`
 * en el almacenamiento local. 
 * Si bien es posible omitir esta verificación agregando manualmente un objeto al almacenamiento local 
 * utilizando las herramientas de desarrollo del navegador, esto solo daría acceso al componente del lado 
 * del cliente, no daría acceso a ningún dato seguro real de la API del servidor debido a una autenticación
 * válida Se requiere token (JWT) para esto._
 * 
 * @param {*} param0 Param ¿?
 * 
 * @author NAR
 * @version 1.0.1
 * @since 18.1
 */

const IsLogging = localStorage.getItem('user');
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)