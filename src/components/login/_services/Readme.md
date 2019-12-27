# `_services`

Maneja todas las comunicaciones http con apis back-end para la aplicación, cada servicio
encapsula las llamadas api para un tipo de contenido (por ejemplo, usuarios) y expone 
métodos para realizar diversas operaciones (por ejemplo, operaciones CRUD). Los servicios 
también pueden tener métodos que no envuelven llamadas http, por ejemplo, el método
`userService.logout()` simplemente elimina un elemento del almacenamiento local.

Me gusta envolver las llamadas http y los detalles de implementación en una capa de
servicios, proporciona una separación clara de las preocupaciones y simplifica las 
acciones redux (y otros módulos) que utilizan los servicios.