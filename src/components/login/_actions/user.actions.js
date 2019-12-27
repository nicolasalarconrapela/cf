import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

/**
 * ## userAction
 * 
 * _"**Contiene creadores de acciones de Redux para acciones relacionadas con los usuarios**. Los creadores de acciones públicas 
 * se exponen a través del objeto `userActions` en la parte superior del archivo y las implementaciones de funciones se 
 * encuentran a continuación._
 * 
 * _La mayoría de las acciones para los usuarios son **acciones asíncronas** que se componen de múltiples **acciones secundarias**, 
 * esto se debe a que tienen que hacer una solicitud http y esperar la respuesta antes de completar._
 * 
 * _Las acciones asincrónicas normalmente envían una acción de request antes de realizar una tarea asincrónica 
 * (por ejemplo, una solicitud http) y luego envían una acción de `success` o `error` en función del resultado
 * de la tarea asincrónica."_
 * 
 * @author NAR
 * @version 1.0.1
 * @since 18.1
 */
export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

/**
 * Tarea asincrona de loguearse
 * 
 * > * Realiza un 'dispatch' de una acción `LOGIN_REQUEST` con `dispatch(request({ username }));`
 * > * Llama a la tarea asincrónica `userService.login(username, password)`
 * > * Realiza un 'dispatch' de un `LOGIN_SUCCES` con `dispatch(success(user));` :
 * >  * Si el inicio de sesión fue exitoso o 
 * >  * Realiza un 'dispatch' de una acción `LOGIN_FAILURE` con `dispatch(failure(error));` si falla el inicio de sesión
 * > 
 * > Además los creadores de sub-acciones en funciones anidadas dentro de cada función de creador de acción asíncrona.
 * > Por ejemplo, la función login() contiene 3 funciones creadoras de acciones anidadas para :
 * > * request() , 
 * > * success() y 
 * > * failure()
 * > 
 * > que devuelven las acciones 
 * > 
 * > * LOGIN_REQUEST , 
 * > * LOGIN_SUCCESS y 
 * > * LOGIN_FAILURE 
 * > 
 * > respectivamente. 
 * > 
 * > Estos, en funciones anidadas permite darles nombres estándar como solicitud, éxito y error 
 * > sin chocar con otros nombres de funciones porque solo existen dentro del alcance de la función principal.
 */
function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

/**
 * Tarea asincrona de des-loguearse
 */
function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

/**
 * Tarea asincrona de registrarse
 */
function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

/**
 * Tarea asincrona de mostrar todos los usuarios
 */
function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

/**
 * Tarea asincrona de eliminacion
 * 
 * > Note : _prefixed function name with underscore because delete is a reserved word in javascript_
 */
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => {
                    dispatch(success(id));
                },
                error => {
                    dispatch(failure(id, error));
                }
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}