/**
 *   array in local storage for registered users
 */
let users = JSON.parse(localStorage.getItem('users')) || [];

// TODO : Conexion con API
/**
 * ## configureFakeBackend
 *
 * Backend 'falso' que se utiliza para la simulacion de conxion a Backend
 *
 * _"Monkey parchea la función fetch() para interceptar ciertas solicitudes de API e imitar el
 * comportamiento de una API real mediante la gestión de datos en el almacenamiento local del
 * navegador. Cualquier solicitud que no sea interceptada se pasa a la función real fetch()."_
 *
 * @author NAR
 * @version 1.0.1
 * @since 18.3
 */
export function configureFakeBackend() {

    let realFetch = window.fetch;

    /**
     * Autentificacion
     * @param {String} url URL principal
     * @param {Request} opts Request Init
     * @param {Promise} resolve Promise como resultado.
     * @see https://www.fullstackreact.com/30-days-of-react/day-15/
     * @param {reject} reject Devolucion
     */
    function getAuth(url, opts, resolve, reject) {

        // autenticar
        if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
            // get parameters from post request
            let params = JSON.parse(opts.body);
            // find if any user matches login credentials
            let filteredUsers = users.filter(
                user => {
                    return user.userName === params.userName &&
                        user.password === params.password;
                });

            if (filteredUsers.length) {
                // if login details are valid return user details and fake jwt token
                let user = filteredUsers[0];
                let responseJson = {
                    id: user.idUser,
                    username:  user.username,
                    alias : user.alias,
                    password: user.password,
                    repeatpassword: user.repeatpassword,
                    access : user.access,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    phone : user.phone,
                    telephone : user.telephone,
                    email : user.email,
                    dateofBirth : user.dateofBirth,
                    street: user.street,
                    cp: user.cp,
                    population : user.population,
                    province1 : user.province1,
                    country1 : user.country1,
                    sex1 : user.sex1,
                    documentIdentify : user.documentIdentify,
                    photo : user.photo,                   

                    token: 'fake-jwt-token',
                };
                resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
            } else {
                // else return error
                reject('Username or password is incorrect');
            }

        }
    }

    /**
     * Get users
     * @param {String} url URL principal
     * @param {Request} opts Request Init
     * @param {Promise} resolve Promise como resultado.
     * @param {reject} reject Devolucion
     */
    function getUsers(url, opts, resolve, reject) {

        if (url.endsWith('/users') && opts.method === 'GET') {
            // check for fake auth token in header and return users if valid, 
            // this security is implemented server side in a real application
            if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                resolve(
                    {
                        ok: true,
                        text: () => Promise.resolve(JSON.stringify(users))
                    });
            } else {
                // return 401 not authorised if token is null or invalid
                reject('Unauthorised');
            }

        }
    }

    /**
     * Registro de usuario
     * @param {String} url URL principal
     * @param {Request} opts Request Init
     * @param {Promise} resolve Promise como resultado.
     * @param {reject} reject Devolucion
     */
    function getUsersById(url, opts, resolve, reject) {

        if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
            // check for fake auth token in header and return user if valid,
            // this security is implemented server side in a real application
            if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                // find user by id in users array
                let urlParts = url.split('/');
                let id = parseInt(urlParts[urlParts.length - 1]);
                let matchedUsers = users.filter(user => {
                    return user.id === id;
                });
                let user = matchedUsers.length ? matchedUsers[0] : null;

                // respond 200 OK with user
                resolve({
                    ok: true,
                    text: () => JSON.stringify(user)
                });
            } else {
                // return 401 not authorised if token is null or invalid
                reject('Unauthorised');
            }


        }
    }

    /**
     * Registro de usuario
     * @param {String} url URL principal
     * @param {Request} opts Request Init
     * @param {Promise} resolve Promise como resultado.
     * @param {reject} reject Devolucion
     */
    function registerUser(url, opts, resolve, reject) {
        // register user
        if (url.endsWith('/users/register') && opts.method === 'POST') {
            // get new user object from post body
            let newUser = JSON.parse(opts.body);

            // validation
            let duplicateUser = users.filter(user => {
                return user.username === newUser.username;
            }).length;
            if (duplicateUser) {
                reject('Username "' + newUser.username + '" is already taken');
                return;
            }
                
            // save new user
            newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            // respond 200 OK
            resolve({ ok: true, text: () => Promise.resolve() });


        }

    }

    /**
     * Eliminacion de usuario
     * @param {String} url URL principal
     * @param {Request} opts Request Init
     * @param {Promise} resolve Promise como resultado.
     * @param {reject} reject Devolucion
     */
    function deleteUser(url, opts, resolve, reject) {
        if (url.match(/\/users\/\d+$/) && opts.method === 'DELETE') {
            // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
            if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                // find user by id in users array
                let urlParts = url.split('/');
                let id = parseInt(urlParts[urlParts.length - 1]);
                for (let i = 0; i < users.length; i++) {
                    let user = users[i];
                    if (user.id === id) {
                        // delete user
                        users.splice(i, 1);
                        localStorage.setItem('users', JSON.stringify(users));
                        break;
                    }
                }

                // respond 200 OK
                resolve({ ok: true, text: () => Promise.resolve() });
            } else {
                // return 401 not authorised if token is null or invalid
                reject('Unauthorised');
            }


        }
    }

    /**
     * Pasar por cualquier solicitud no manejada anteriormente
     * @param {String} url URL principal
     * @param {Request} opts Request Init
     * @param {Promise} resolve Promise como resultado.
     * @param {reject} reject Devolucion
     */
    function otherResponse(url, opts, resolve, reject) {
        realFetch(url, opts).then(response => resolve(response));
    }


    /**
     * [MAIN] Proceso que maneja los diferentes procesos de MCV
     * @param {String} url URL principal
     * @param {Request} opts Request Init
     * @param {Promise} resolve Promise como resultado.
     * @param {reject} reject Devolucion
     */
    function processManager(url, opts, resolve, reject) {
        // TODO : try/catch
        getAuth(url, opts, resolve, reject)
        // TODO : try/catch
        getUsers(url, opts, resolve, reject)
        // TODO : try/catch
        getUsersById(url, opts, resolve, reject)
        // TODO : try/catch
        registerUser(url, opts, resolve, reject)
        // TODO : try/catch
        deleteUser(url, opts, resolve, reject)
        // TODO : try/catch
        otherResponse(url, opts, resolve, reject)
    }

    /**
     * Error Handler
     */
    function errorHandler(error) {
        // acá hacemos algo con el error como mostrarlo en consola
        // o mejor aún mandarlo a algún sistema como Sentry o track:js
        // ¡incluso a nuestro propio servicio interno!
        console.error(error);
    }

    window.fetch = function (url, opts) {

        return new Promise((resolve, reject) => {
            // ajustar el tiempo de espera para simular una llamada API del servidor
            setTimeout(() => {

                try {
                    processManager(url, opts, resolve, reject)
                } catch (error) {
                    return errorHandler(error);
                }

            }, 500);
        });
    }
}