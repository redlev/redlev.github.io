# REDLEV website

Sitio oficial publicado con GitHub Pages desde `redlev/redlev.github.io`.

## Cómo editar contenido mensual

La mayoría del contenido editable está en `data/content.json`.

1. En GitHub, abre `data/content.json`.
2. Presiona el icono de edición.
3. Cambia solo los textos, fechas, enlaces o rutas de imagen.
4. Guarda el cambio con `Commit changes`.

## Secciones más frecuentes

- `activities.upcoming`: próximas actividades. Mantén hasta dos actividades visibles.
- `activities.upcoming[0]`: actividad destacada, con imagen y enlace a una página secundaria si corresponde.
- `activities.upcoming[1]`: seminario mensual editable. Deja `"image": ""` si no quieres mostrar imagen.
- `featured_research`: artículo destacado del mes.
- `committee`: integrantes del comité.
- `links`: formularios y redes sociales.

## Imágenes

Sube imágenes a `assets/img/` y escribe la ruta en `data/content.json`.

Ejemplo:

```json
"image": "assets/img/nombre-de-imagen.jpg"
```

## Página secundaria del simposio

La actividad destacada enlaza a `simposio-2026.html`. Esa página queda preparada para completar luego programa, inscripciones, comité organizador y otros detalles del evento.
