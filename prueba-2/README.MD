# Transform Duration to Text

## Descripción

El objetivo de este reto es escribir una función que transforme una duración (dada en segundos) a texto legible.

La función debe aceptar un número entero no negativo.  
- Si es cero, debe devolver `"now"`.  
- De lo contrario, debe devolver la duración expresada como una combinación de **años**, **días**, **horas**, **minutos** y **segundos**.

### Ejemplos

- Para `62` segundos, la función debe retornar:  
  `"1 minute and 2 seconds"`

- Para `3662` segundos, la función debe retornar:  
  `"1 hour, 1 minute and 2 seconds"`

> **Nota**: Para este reto, un año equivale a **365 días** y un día equivale a **24 horas**.

---

## Reglas detalladas

- La expresión resultante está compuesta por elementos como `4 seconds`, `1 year`, etc.  
  Siempre debe usar la forma plural si el valor es mayor que 1.

- Los componentes están separados por **coma y espacio** `", "` excepto el último, que va separado por `" and "`.

- Las unidades de tiempo más significativas siempre deben aparecer primero. Ejemplo:
  - ❌ `1 second and 1 year`
  - ✅ `1 year and 1 second`

- No debe haber componentes duplicados, como `5 seconds and 1 second`.

- Si una unidad tiene valor cero, no debe aparecer. Ejemplo:
  - ❌ `1 minute and 0 seconds`
  - ✅ `1 minute`

- Las unidades deben usarse lo máximo posible. Por ejemplo:
  - ❌ `61 seconds`
  - ✅ `1 minute and 1 second`

---

## Consideraciones

- El texto debe seguir una redacción natural en inglés.
- Los componentes deben estar en el orden correcto: `years`, `days`, `hours`, `minutes`, `seconds`.
- Asegúrate de gestionar correctamente los plurales y las conjunciones.

---
