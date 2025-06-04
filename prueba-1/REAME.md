# Food Ratings - Dish with Highest Average

Una cadena de restaurantes ha lanzado una aplicación para pedidos de comida a domicilio. Los usuarios pueden enviar reseñas y calificar los diferentes platos del menú.

## Descripción del Problema

Cada reseña contiene:
- Un ID de plato.
- Una calificación de 1 a 5 (1 = peor, 5 = mejor).

El gerente quiere saber cuál es el plato más querido del restaurante, es decir, el que tiene la mayor calificación promedio.

## Enfoque de la Solución

1. Agrupar las calificaciones por ID de plato.
2. Calcular la calificación promedio de cada plato.
3. Devolver el ID del plato con mayor promedio.
4. Si hay empate en el promedio, se devuelve el ID más pequeño.

## Formato de Entrada

- La primera línea contiene un número entero `n`, que indica el número de reseñas.
- Las siguientes `n` líneas contienen dos enteros separados por espacio:
  - `dish_id` (ID del plato)
  - `rating` (calificación del usuario)

### Ejemplo de Entrada

```
4
512 2
123 3
987 4
123 5
```

## Formato de Salida

Un único número entero que representa el ID del plato con la calificación promedio más alta.

### Ejemplo de Salida

```123```

## Explicación del Ejemplo

Datos:
- Plato 512: calificación 2 → promedio = 2
- Plato 123: calificaciones 3 y 5 → promedio = (3 + 5) / 2 = 4
- Plato 987: calificación 4 → promedio = 4

Ambos platos 123 y 987 tienen promedio 4, pero 123 tiene menor ID, por lo tanto es el plato más querido.

## Restricciones

- `1 ≤ n ≤ 100000`
- `1 ≤ dish_id ≤ 10^9`
- `1 ≤ rating ≤ 5`
