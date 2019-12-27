import { alertConstants } from '../_constants';
/**
 * ## alert
 * 
 * Gestiona el estado de la aplicación para alertas/notificaciones de tostadora,
 * actualizando el estado cuando se envía una acción de alerta desde cualquier 
 * lugar de la aplicación.
 * 
 * Por ejemplo :
 * 
 * Cuando una `alertConstants.SUCCESS`es realiza un `dispatch`,
 * el reductor actualiza el estado de alerta a un objeto con type: '`alert-success`' 
 * y el mensaje : `action.message`.
 * 
 * @param {*} state Estado
 * @param {*} action Accion
 * 
 * @author NAR
 * @version 1.0.0
 * @since 18.2
 */
export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}