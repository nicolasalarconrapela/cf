# _helpers

La carpeta de ayuda contiene todos los fragmentos que no caben en otras carpetas pero no justifican
tener una carpeta propia

Contiene creadores de acciones de Redux para acciones relacionadas con alertas/notificaciones de tostadora en la
aplicación. 

Por ejemplo, para mostrar un mensaje de alerta de éxito con el texto 'Registro exitoso' puede llamar a
`dispatch(alertActions.success('Registration successful'));`.
Primero estan las acciones disponibles de un vistazoy los detalles de implementación para cada creador 
de acción se colocan en las siguientes funciones. 