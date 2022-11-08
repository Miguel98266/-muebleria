
# Backend API REST FULL de un sistema de renta de inmuebles
**Requerimientos:**
- El sistema cuenta con 2 roles:
  - Administrador y cliente
- Se necesitan registrar los datos personales de todas las personas que quieran hacer uso de nuestro sitema, los datos que se pueden registrar de una persona son:
  - Nombre
  - Apellidos
  - Fecha de nacimiento
  - No. Identificación (DNI)
  - Teléfono
  - Correo
  - Dirección actual
  - Contraseña
  - Personas de contacto
- Los inmuebles ya sea departamento, casa, oficina, bodega, son registrados por los clientes y para poder registrar un domicilio, los siguientes campos son obligatorios
  - Calle
  - No. Ext.
  - No. Int.
  - Zip Code
  - Ciudad
  - País
  - Localidad (colonia)
  - Tipo de oferta (renta o venta)
  - Precio
  - Descripción
  - No. de recámaras
  - Fotos del domicilio
- A cada oferta registrada se le pueden adjuntar mensajes, los cuales tienen que llegarle al dueño de la publicación del domicilio y únicamente él puede verlos. Estos mensajes necesitan llevar la siguiente información
  - Nombre
  - Correo
  - Teléfono
  - Mensaje breve
- **Búsqueda general.**
Los visitantes del sitio que usa nuestra api, pueden buscar/consultar los inmuebles, por medio de una consulta capaz de filtrar dependiendo de los siguientes parámetros:
  - Filtro por rango de precio
  - por país o localidad
  - Tipo de inmueble
  - Número de recámaras
- Los resultados de la búsqueda descrita previamente, deberán regresar la primera imagen guardada del inmueble (sugerido query params)
- Al seleccionar un inmueble resultante de una búsqueda, se podrá mostrar información detallada del mismo y que se muestre cuántas personas están interesadas en esa oferta
- El sistema deberá validar todos los datos y campos que se ingresen.
- La contraseña del sistema deberá estar hasheada
- Los endpoints del API deberán estar protegidos por token, el único endpoint sin protección será el de búsqueda general

## Puntos extra
- Testear endpoints
- Verificar cuenta por medio de un correo electrónico
- Generar un reporte mensual de cuántos inmuebles son registrados y rentados/vendidos
- Como dueño de inmueble tener un endpoint para responder mensajes de los clientes
- Generar todo con typescript
- Usar un CRUD genérico
- Deployar a heroku o netlify
