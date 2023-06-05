# prueba-smarttalent


### Backend Developing

### Authentication user `/auth/login`

Request Body

```json
{
    "email": "test@email.com",
    "password": "123456"
}
```

Response:

```json
{
    "user": {
        "_id": "647d3d6775ce03928a06aaac",
        "username": "rober",
        "email": "test@correo.com",
        "password": "$2a$10$7FqpfikmTJCZExLI1dY/JeOFJZyBv8lTAgAKDFqA2xN/t7ipn1Hoq",
        "isAdmin": false,
        "createdAt": "2023-06-05T01:41:59.500Z",
        "updatedAt": "2023-06-05T01:41:59.500Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2QzZDY3NzVjZTAzOTI4YTA2YWFhYyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODU5MjkzMzF9.rgobNyPEPB5_SbqWf8nydbjLJtUm-n3y5TfOy7J6N3o"
}
```

1. Run `npm install` to install server dependencies.

2. Configure the env

```shell
$ cp .env.example .env
```

3. Upate `.env` with the required info

4. Run `npm run dev` to start the development server

- La prueba debe ser entregada, desplegada y usable.
- Se debe entregar el código fuente por medio del repositorio de su preferencia.
- Podrá realizar mocks de servicios web para la interacción con datos.

## Historias de usuario

### Administración de alojamiento hoteles locales

**Criterios de aceptación**

Dado que yo como agente de viajes inicie sesión en mi plataforma de viajes y desee gestionar un hotel, entonces

- [ ] El sistema deberá permitir crear un nuevo hotel
- [ ] El sistema deberá permitir asignar al hotel cada una de las habitaciones disponibles para reservar
- [ ] El sistema deberá permitir modificar los valores de cada habitación
- [ ] El sistema deberá permitir modificar los datos de cada hotel
- [ ] El sistema deberá permitir habilitar o deshabilitar cada uno de los hoteles
- [ ] El sistema deberá permitir hbailitar o deshabilitar cada una de las habitaciones del hotel

Dado que yo como agente de viajes inicie sesión en mi plataforma de viajes y desee ver las reservas de hoteles, entonces

- [ ] El sistema deberá listar cada una de las reservas realizadas en mis hoteles
- [ ] El sistema deberá permitir ver el detalle de cada una de las reservas realizadas

**Observaciones**

- [ ] Cada habitación deberá permitir registrar el costo base, impuestos y tipo de habitación
- [ ] Cada habitación deberá permitir registrar la ubicación en que se encuentra

### Reserva de hoteles

**Criterios de aceptación**

Dado que yo como viajero esté en el buscador de hoteles, entonces:

- [ ] El sistema me deberá dar la opción de buscar por:
  1. [ ] fecha de entrada al alojamiento.
  2. [ ] fecha de salida del alojamiento.
  3. [ ] cantidad de personas que se alojarán.
  4. [ ] ciudad de destino

Dado que yo como viajero entre al sitio de viajes y realice una búsqueda de hoteles, entonces:

- [ ] El sistema me deberá elegir una habitación del hotel de mi preferencia

Dado que yo como viajero seleccione mi habitación de preferencia, entonces:

- [ ] El sistema me deberá desplegar un formulario de reserva para ingresar los datos de los huéspedes
- [ ] El sistema me deberá realizar la reserva de la habitación
- [ ] El sistema me deberá notificar la reserva por medio de correo electrónico

**Observaciones**

Los datos de cada pasajero deben ser:

- [x] Nombres y apellidos
- [x] Fecha de nacimiento
- [x] Género
- [x] Tipo de documento
- [x] Número de documento
- [x] Email
- [x] Teléfono de contacto

La reserva deberá asociar un contacto de emergencia, el cual debe contener:

- [ ] Nombres completos
- [ ] Teléfono de contacto

#### Plus

- [x] Desarrollo de servicios web
- [ ] Utilice estrategias de CI/CD
