# Publicar la web de REDLEV en GitHub Pages

La web se publica desde el repositorio `redlev/redlev.github.io` y queda disponible en:

```text
https://redlev.github.io/
```

GitHub Pages toma los archivos del repositorio y los sirve como sitio web estático. En la práctica, publicar significa dejar los archivos correctos guardados en GitHub, normalmente en la rama `main`.

## Qué se publica

Para una actualización mensual normalmente se publican estos archivos:

| Cambio | Archivos que suelen cambiar |
| --- | --- |
| Seminario mensual | `data/content.json` |
| Nueva actividad destacada | `data/content.json` y quizá una imagen en `assets/img/events/` |
| Actividad reciente | `data/content.json` y quizá una imagen en `assets/img/events/` |
| Artículo destacado | `data/content.json` y quizá una imagen en `assets/img/research/` |
| Foto de comité | `data/content.json` y una imagen en `assets/img/committee/` |
| Cambios del simposio | `simposio-2026.html`, imágenes y quizá `data/content.json` |
| Cambios visuales | `assets/css/styles.css` y `index.html` si cambia la estructura |
| Cambios de comportamiento | `assets/js/main.js` |
| Instrucciones | `README.md` y `PUBLICAR_EN_GITHUB.md` |

No es necesario volver a subir todos los archivos cada vez. Sube o confirma solo los archivos que cambiaste.

## Opción 1: publicar desde la web de GitHub

Esta es la opción recomendada para cambios simples de contenido.

1. Abre `https://github.com/redlev/redlev.github.io`.
2. Entra al archivo que quieres cambiar.
3. Presiona el icono de edición.
4. Haz los cambios.
5. Baja hasta `Commit changes`.
6. Escribe un mensaje breve:

```text
Actualizar seminario mensual
```

7. Para cambios pequeños, selecciona `Commit directly to the main branch`.
8. Presiona `Commit changes`.
9. Espera unos minutos.
10. Abre `https://redlev.github.io/` y revisa el resultado.

Para subir imágenes desde GitHub:

1. Abre la subcarpeta correcta dentro de `assets/img/`.
2. Presiona `Add file > Upload files`.
3. Sube la imagen.
4. Guarda con `Commit changes`.
5. Usa la ruta en `data/content.json`.

Subcarpetas recomendadas:

| Carpeta | Uso |
| --- | --- |
| `assets/img/events/` | Seminarios, simposios, banners y actividades recientes. |
| `assets/img/committee/` | Fotografías de integrantes del comité. |
| `assets/img/research/` | Imágenes de artículos destacados. |
| `assets/img/site/` | Logo y recursos permanentes del sitio. |

Ejemplo:

```json
"image": "assets/img/events/afiche-seminario-junio-2026.jpg"
```

## Opción 2: publicar con GitHub Desktop

Esta opción es útil cuando quieres editar varios archivos, revisar cambios con más calma o trabajar sin depender del editor web.

Primera configuración:

1. Instala y abre GitHub Desktop.
2. Inicia sesión con una cuenta que tenga permisos sobre `redlev/redlev.github.io`.
3. Elige `File > Clone repository`.
4. Selecciona `redlev/redlev.github.io` o pega la URL del repositorio.
5. Elige una carpeta local.
6. Presiona `Clone`.

Flujo de trabajo habitual:

1. Abre GitHub Desktop.
2. Selecciona el repositorio `redlev.github.io`.
3. Presiona `Fetch origin`.
4. Si aparece `Pull origin`, presiónalo antes de editar.
5. Edita los archivos en tu computador.
6. Revisa la pestaña `Changes` en GitHub Desktop.
7. Confirma que solo aparecen archivos que realmente quieres publicar.
8. Escribe un resumen en `Summary`.
9. Presiona `Commit to main`.
10. Presiona `Push origin`.
11. Abre `https://redlev.github.io/` y revisa.

Si GitHub Desktop muestra conflictos, no publiques todavía. Eso significa que hay cambios en GitHub y cambios locales que se pisan. En ese caso conviene pedir ayuda o resolver el conflicto con cuidado.

## Opción 3: trabajar con Codex y publicar después

Codex puede editar la copia local de la web y ayudarte a revisar errores.

Puedes pedirle cosas como:

```text
Actualiza data/content.json con el nuevo seminario mensual.
```

```text
Agrega una sección de programa en simposio-2026.html.
```

```text
Revisa si el JSON es válido y dime qué archivos cambiaron.
```

Después de que Codex modifique archivos:

1. Revisa el resumen de cambios.
2. Abre la web localmente para comprobarla.
3. Publica con GitHub Desktop o con la web de GitHub.

Si Codex tiene permisos de escritura sobre el repositorio, también puede ayudarte a crear commit y push. Si aparece un error de permisos, usa GitHub Desktop o sube los archivos manualmente desde GitHub.

## Revisión local antes de publicar

Para revisar el sitio en tu computador, lo más seguro es usar un servidor local.

Abre PowerShell en la carpeta del sitio y ejecuta:

```powershell
python -m http.server 8000
```

Luego abre:

```text
http://localhost:8000/
```

Revisa:

1. La página principal carga contenido.
2. La sección `Próximas actividades` muestra las actividades correctas.
3. Los botones llevan a los enlaces correctos.
4. Las imágenes aparecen.
5. La página del simposio abre desde el menú o desde el botón.
6. La web se ve bien en tamaño de celular.

Para detener el servidor, presiona `Ctrl + C` en PowerShell.

## Validar `data/content.json`

Antes de publicar cambios en `data/content.json`, valida que el archivo esté bien formado.

En PowerShell:

```powershell
Get-Content -Encoding UTF8 -Raw -LiteralPath "data\content.json" | ConvertFrom-Json | Out-Null
```

Si el comando no muestra errores, el JSON tiene una estructura válida.

Errores típicos:

1. Falta una coma entre campos.
2. Sobra una coma al final de un bloque.
3. Falta una comilla de cierre.
4. Falta una llave `}` o un corchete `]`.
5. Se escribió `True` o `False` en vez de `true` o `false`.

## Publicar cambios grandes de diseño

Para cambios grandes, como modificar `index.html`, `styles.css` o `main.js`, conviene hacer una revisión más cuidadosa.

Checklist:

1. Revisa la web en servidor local.
2. Prueba en vista angosta, como celular.
3. Confirma que el menú móvil abre y cierra.
4. Revisa que `data/content.json` sigue cargando.
5. Confirma que los enlaces externos abren.
6. Si cambiaste CSS o JavaScript, actualiza la versión en `index.html`.

Ejemplo:

```html
<link rel="stylesheet" href="assets/css/styles.css?v=20260515-7" />
<script src="assets/js/main.js?v=20260515-5" defer></script>
```

El texto después de `?v=` puede ser una fecha o un número. Sirve para evitar que el navegador use una copia antigua.

## Cuándo publicar directo en `main` y cuándo usar una rama

Publicar directo en `main` está bien para:

1. Actualizar fecha, título o enlace de seminario.
2. Cambiar artículo destacado.
3. Subir una imagen nueva.
4. Corregir un error pequeño de texto.

Usa una rama o pide revisión para:

1. Cambios grandes de diseño.
2. Cambios en JavaScript.
3. Reorganización de secciones.
4. Creación de páginas nuevas importantes.
5. Cambios que no estás segura o seguro de querer publicar inmediatamente.

## Comandos Git opcionales

Si alguna vez quieres trabajar desde terminal, el flujo básico es:

```powershell
git status
git pull
git add data/content.json
git commit -m "Actualizar seminario mensual"
git push
```

Si cambiaste varios archivos:

```powershell
git add data/content.json assets/img/events/afiche-seminario-junio-2026.jpg
git commit -m "Actualizar seminario mensual"
git push
```

GitHub Desktop hace estos pasos con botones, así que no necesitas memorizar comandos para publicar.

## Después de publicar

GitHub Pages puede tardar algunos minutos.

Revisa:

1. `https://redlev.github.io/`
2. `https://redlev.github.io/simposio-2026.html`
3. Enlaces a formularios.
4. Imágenes nuevas.
5. Vista móvil.

Si no ves los cambios:

1. Espera unos minutos.
2. Recarga con `Ctrl + F5`.
3. Abre una ventana privada.
4. Revisa en GitHub que el archivo realmente quedó actualizado.

## Si algo sale mal

### La web publicada no muestra contenido

Revisa `data/content.json`. Un error de JSON puede impedir que la página cargue el contenido dinámico.

### Una imagen no aparece

Revisa que el archivo exista en la subcarpeta correcta de `assets/img/` y que la ruta esté escrita igual en `data/content.json`.

Ejemplo correcto:

```json
"image": "assets/img/events/manizales-colombia.jfif"
```

### GitHub no permite guardar cambios

Puede ser un problema de permisos. Verifica que la cuenta tenga permiso de escritura sobre `redlev/redlev.github.io`.

### GitHub Desktop no deja hacer push

Prueba:

1. Presionar `Fetch origin`.
2. Presionar `Pull origin` si aparece.
3. Revisar si hay conflictos.
4. Confirmar que iniciaste sesión con la cuenta correcta.

### Codex no puede publicar directamente

Puede faltar permiso de escritura de la integración. En ese caso, usa Codex para preparar los archivos y publica con GitHub Desktop o desde la web de GitHub.

## Repositorio antiguo

Si todavía existe `redlev/redlev2.github.io` y ya no se usa, puede eliminarse desde GitHub en:

```text
Settings > Danger Zone > Delete this repository
```

Antes de eliminarlo, confirma que no contiene archivos únicos que deban conservarse.
