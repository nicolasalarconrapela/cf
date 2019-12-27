import { userConstants } from '../_constants';

/**Obtencion del usuario desde local */
let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

/**
 * ## authentication
 * 
 * El reductor de autenticación redux gestiona el estado relacionado con las acciones de
 * * inicio de sesión (y cierre de sesión), 
 * * en el inicio de sesión exitoso,
 * * el objeto de usuario actual y 
 * * un indicador login que se almacenan en la sección de authentication del estado de la aplicación. 
 * 
 * Al cerrar sesión o al fallar el inicio de sesión, el estado de autenticación se establece
 * en un objeto vacío, y durante el inicio de sesión (entre la solicitud de inicio de sesión y el éxito / fallo) 
 * el estado de autenticación tiene un indicador `loggingIn` establecido en verdadero y
 * un objeto de usuario con los detalles del usuario que está intentando iniciar sesión.
 * 
 * @param {*} state Estado
 * @param {*} action Accion
 * 
 * @author NAR
 * @version 1.0.0
 * @since 18.2
 */
export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}