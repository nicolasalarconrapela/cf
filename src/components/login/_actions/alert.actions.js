import { alertConstants } from '../_constants';

/**
 * ## AlertActions
 * 
 * Contiene creadores de acciones de Redux para acciones relacionadas con alertas/notificaciones de tostadora en la
 * aplicación. 
 * 
 * Por ejemplo, para mostrar un mensaje de alerta de éxito con el texto 'Registro exitoso' puede llamar a
 * `dispatch(alertActions.success('Registration successful'));`.
 * Primero estan las acciones disponibles de un vistazoy los detalles de implementación para cada creador 
 * de acción se colocan en las siguientes funciones.
 * 
 * @author NAR
 * @version 1.0.1
 * @since 18.2
 */
export const alertActions = {
    success,
    error,
    clear
};

/**
 * `Success`
 * @param {String} message Mensaje
 */
function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

/**
 * `Error`
 * @param {String} message Mensaje
 */
function error(message) {
    return { type: alertConstants.ERROR, message };
}

/**
 * `Limpiado`
 * @param {String} message Mensaje
 */
function clear() {
    return { type: alertConstants.CLEAR };
}