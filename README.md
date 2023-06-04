# prueba-smarttalent

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

- [ ] Nombres y apellidos
- [ ] Fecha de nacimiento
- [ ] Género
- [ ] Tipo de documento
- [ ] Número de documento
- [ ] Email
- [ ] Teléfono de contacto

La reserva deberá asociar un contacto de emergencia, el cual debe contener:

- [ ] Nombres completos
- [ ] Teléfono de contacto

#### Plus

- [ ] Desarrollo de servicios web
- [ ] Utilice estrategias de CI/CD
