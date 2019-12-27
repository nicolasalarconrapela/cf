
/**
 * ## authHeader
 * 
 * Encabezado de autorización de devolución con token jwt
 * 
 * _"El encabezado Auth es una función auxiliar que devuelve un encabezado de autorización HTTP
 * que contiene el Json Web Token (JWT) del usuario actualmente conectado desde el 
 * almacenamiento local. Si el usuario no está conectado, se devuelve un objeto vacío.
 * El encabezado de autenticación se utiliza para realizar solicitudes HTTP autenticadas a la
 * API del servidor mediante la autenticación JWT."_
 * 
 * @author NAR
 * @version 1.0.1
 * @since 18.1
 */
export function authHeader() {
    // TODO :Realizacion desde la API
    /** Obtener el usuario conectado desde local */
    let user = JSON.parse(localStorage.getItem('user'));
    /** Verificacion de estado de conexión. */
    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}