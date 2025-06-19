# 🔐 Be a Detective - PIN Variations Challenge

## Descripción

Detective, uno de nuestros agentes rastreó al objetivo, Vincent el ladrón, hasta un almacén oculto. Creemos que allí guarda los bienes robados. La entrada está protegida por una cerradura digital que requiere un PIN.

Nuestro informante no está completamente seguro del PIN que Vincent ingresó, pero cree que fue **"1357"**. Sin embargo, también comentó que **cada dígito del PIN podría haber sido uno de sus dígitos adyacentes** en el teclado.

---

## Distribución del teclado

El teclado tiene la siguiente disposición:

```
┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
```


- Solo se consideran movimientos **horizontales y verticales** (no diagonales).

---

## Objetivo

Dado un PIN observado (en formato de cadena), devuelve **todas las combinaciones posibles** considerando:

1. El PIN original.
2. Cada dígito puede cambiarse por sí mismo o por uno de sus dígitos adyacentes (horizontal o vertical).
3. El resultado debe ser un **array de cadenas**, **ordenado ascendentemente**.

---

## Ejemplos

### Entrada:

"11"


### Salida esperada:

[
"11", "12", "14",
"21", "22", "24",
"41", "42", "44"
]


---

## Notas

- El sistema **no bloquea ni alerta**, así que podemos probar todas las combinaciones posibles.
- El PIN observado debe incluirse entre los resultados.
- El número de combinaciones puede ser grande, pero debe estar **ordenado en orden ascendente** (alfabéticamente como cadenas).
- El código será evaluado con múltiples casos ocultos.

---

## Restricciones

- ⏱ Tiempo límite: 50 segundos por archivo de entrada.
- 💾 Memoria máxima: 256 MB.
- 📦 Tamaño máximo del código: 1024 KB.

---

## Entrada

- Una cadena con el PIN observado (ej. `"1357"`)

## Salida

- Un array de cadenas con todas las posibles variaciones válidas del PIN.

---

## ¡Buena suerte, detective!

