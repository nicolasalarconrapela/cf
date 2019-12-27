import { authHeader } from '../_helpers';

/**
 * # user.service
 * 
 * El servicio de usuario encapsula todas las llamadas de API de back-end para realizar operaciones CRUD 
 * en los datos del usuario, así como para iniciar sesión y salir de la aplicación de ejemplo. 
 * 
 * Los métodos de servicio se exportan a través del objeto userService en la parte superior del archivo,
 * y la implementación de cada método se encuentra en las declaraciones de funciones a continuación.
 * 
 * En el método `handleResponse`, el servicio verifica si la respuesta http de la api es 401 Unauthorized
 * y desconecta automáticamente al usuario. 
 * 
 * Esto maneja si el token JWT caduca o ya no es válido por algún motivo.
 * 
 * @author NAR
 * @version 1.0.0
 * @since 18.2
 */
export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

/**
 * Func. de login desde servicio
 * 
 * @param {String} username Usuario
 * @param {String} password Contraseña
 */
function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user, null, 3));

            return user;
        });
}

/**
 * Func. de logout desde service
 */
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

/**
 * Func. de obtencion de todos los usuarios desde service
 */
function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/users`, requestOptions).then(handleResponse);
}

/**
 * Func. de obtencion de usuario por ID desde service
 * 
 * @param {String} id Id de Usuario
 */
function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/users/${id}`, requestOptions).then(handleResponse);
}

/**
 * Func. de obtencion de registro de usuario desde service
 * 
 * @param {String} user Usuario
 */
function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(user, null, 3)
    };

    return fetch(`/users/register`, requestOptions).then(handleResponse);
}

/**
 * Func. de actualizacion de usuario desde service
 * 
 * @param {String} username Usuario
 * @param {String} password Contraseña
 */
function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body:JSON.stringify(user, null, 3)
    };

    return fetch(`/users/${user.id}`, requestOptions).then(handleResponse);;
}

/** 
 * Func. de eliminacion de usuario.
 * 
 * _Note : prefixed function name with underscore because delete is a reserved word in javascript_
 */
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`/users/${id}`, requestOptions).then(handleResponse);
}

/**
 * 
 * HandleResponse
 * @param {*} response Response
 */
function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}