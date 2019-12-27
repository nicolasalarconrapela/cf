import { userConstants } from '../_constants';

/**
 * ## registration
 * 
 * "_Gestiona la sección de registro del estado de la aplicación._
 *  
 * _En la solicitud de registro solo establece un indicador de 
 * `registering` establecido en verdadero que utiliza la página de registro para 
 * mostrar la rueda de carga._
 * 
 * _En el registro de éxito o falla borra el estado de registro._"
 * 
 * @param {*} state Estado
 * @param {*} action Accion
 * 
 * @author NAR
 * @version 1.0.0
 * @since 18.2
 */
export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {};
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}