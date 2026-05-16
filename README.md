# REDLEV website

Sitio oficial de la Red Latinoamericana de Ecofisiología Vegetal, publicado con GitHub Pages desde el repositorio `redlev/redlev.github.io`.

Esta carpeta contiene una página web estática: no usa WordPress ni una base de datos. La mayor parte del contenido mensual se cambia en un archivo de datos (`data/content.json`) y la página lo lee automáticamente con JavaScript.

## Flujo recomendado

Para actualizaciones mensuales, usa este orden:

1. Edita `data/content.json`.
2. Sube las imágenes nuevas a la subcarpeta correcta dentro de `assets/img/`, si las hay.
3. Revisa que el sitio se vea bien.
4. Publica los cambios en GitHub.
5. Abre `https://redlev.github.io/` y confirma que la web publicada quedó correcta.

Para cambios simples, como seminarios, enlaces o artículos destacados, normalmente no necesitas tocar `index.html`, `assets/css/styles.css` ni `assets/js/main.js`.

## Mapa de archivos

| Archivo o carpeta | Para qué sirve | Cuándo editarlo |
| --- | --- | --- |
| `data/content.json` | Guarda textos, enlaces, actividades, comité e investigación destacada. | Casi siempre. Es el archivo principal para actualizaciones de contenido. |
| `assets/img/events/` | Guarda afiches, banners y fotos de actividades. | Cuando agregues seminarios, simposios o actividades recientes. |
| `assets/img/committee/` | Guarda fotografías de integrantes del comité. | Cuando agregues o reemplaces fotos del comité. |
| `assets/img/research/` | Guarda imágenes asociadas al artículo destacado. | Cuando cambies la publicación destacada del mes. |
| `assets/img/site/` | Guarda recursos fijos del sitio, como el logo. | Casi nunca. Solo si cambias identidad visual. |
| `index.html` | Define la estructura de la página principal. | Solo si quieres agregar, quitar o reorganizar secciones. |
| `simposio-2026.html` | Página secundaria del 6to Simposio. | Cuando haya que completar programa, inscripción, comité, alojamiento u otros detalles del evento. |
| `assets/css/styles.css` | Controla el diseño visual: colores, tamaños, columnas, botones, tarjetas y versión móvil. | Cuando quieras cambiar el aspecto de la web. |
| `assets/js/main.js` | Lee `data/content.json` y coloca ese contenido dentro de `index.html`. | Solo si quieres cambiar la lógica de carga o la forma en que se muestran los datos. |
| `README.md` | Manual de uso y edición del sitio. | Cuando cambie el flujo de trabajo o quieras dejar nuevas instrucciones. |
| `PUBLICAR_EN_GITHUB.md` | Guía específica para publicar cambios. | Cuando cambie la forma de publicar o los permisos de GitHub. |

## Editar desde la web de GitHub

Este será probablemente el flujo más cómodo para actualizaciones mensuales.

1. Abre `https://github.com/redlev/redlev.github.io`.
2. Entra al archivo que quieres editar, por ejemplo `data/content.json`.
3. Presiona el icono de lápiz o el botón de edición.
4. Cambia solo los valores necesarios.
5. Baja hasta `Commit changes`.
6. Escribe un resumen breve, por ejemplo `Actualizar seminario mensual`.
7. Para cambios pequeños, puedes guardar directamente en `main`.
8. Espera unos minutos y revisa `https://redlev.github.io/`.

Si también necesitas subir una imagen:

1. Entra a la subcarpeta que corresponda dentro de `assets/img/`: `events`, `committee`, `research` o `site`.
2. Usa `Add file > Upload files`.
3. Arrastra la imagen.
4. Guarda el cambio con `Commit changes`.
5. Copia el nombre exacto de la imagen y úsalo en `data/content.json`.

Ejemplo de ruta de imagen:

```json
"image": "assets/img/events/afiche-seminario-junio-2026.jpg"
```

Para nuevas imágenes, usa nombres simples: minúsculas, sin espacios y sin tildes. Si una imagen ya existe con espacios o tildes, respeta el nombre exacto en la ruta. Por ejemplo:

```text
seminario-junio-2026.jpg
simposio-manizales-programa.png
articulo-destacado-nogales.jpg
```

## Organización de imágenes

Para que la carpeta de recursos sea más fácil de mantener, las imágenes se organizan así:

| Carpeta | Uso recomendado | Ejemplo de ruta |
| --- | --- | --- |
| `assets/img/events/` | Actividades próximas, recientes, seminarios y simposios. | `assets/img/events/Seminario_agrivoltaico.png` |
| `assets/img/committee/` | Fotografías de integrantes del comité. | `assets/img/committee/Eleinis Avila-Lovera.jpg` |
| `assets/img/research/` | Imágenes de artículos destacados. | `assets/img/research/articulo-destacado-nogales.jpg` |
| `assets/img/site/` | Logo y recursos permanentes de la web. | `assets/img/site/logo.png` |

Cuando agregues una imagen nueva, súbela a la subcarpeta correcta y copia esa ruta completa en `data/content.json`.

## Editar localmente con GitHub Desktop

GitHub Desktop permite trabajar en tu computador y luego subir los cambios.

Primera vez:

1. Abre GitHub Desktop.
2. Elige `File > Clone repository`.
3. Busca o pega `redlev/redlev.github.io`.
4. Elige una carpeta local en tu computador.
5. Presiona `Clone`.

Cada vez que vayas a editar:

1. Abre GitHub Desktop.
2. Selecciona el repositorio `redlev.github.io`.
3. Presiona `Fetch origin`.
4. Si aparece `Pull origin`, presiónalo antes de editar.
5. Abre la carpeta local en tu editor, en Codex o en el explorador de archivos.
6. Edita los archivos necesarios.
7. Revisa los cambios en la pestaña `Changes` de GitHub Desktop.
8. Escribe un resumen, por ejemplo `Actualizar artículo destacado`.
9. Presiona `Commit to main`.
10. Presiona `Push origin`.

Para cambios grandes de diseño conviene crear una rama antes de editar. Para cambios mensuales pequeños, trabajar directo en `main` suele ser suficiente si solo una persona está editando.

## Editar localmente con Codex

Codex puede ayudarte a editar los archivos locales, revisar errores y explicar qué cambió.

Ejemplos de pedidos útiles:

```text
Actualiza el seminario mensual en data/content.json con este título, fecha, descripción y enlace.
```

```text
Agrega una sección de programa preliminar en simposio-2026.html siguiendo el diseño actual.
```

```text
Revisa si data/content.json tiene errores de comas o comillas.
```

```text
Explícame qué hace assets/js/main.js usando ejemplos simples.
```

Después de que Codex edite archivos, revisa el resultado antes de publicar. Si quieres, también puedes pedirle:

```text
Muéstrame un resumen de los cambios y dime qué archivos debería subir a GitHub.
```

Codex puede preparar cambios, pero la publicación final dependerá de los permisos disponibles. Si Codex no puede escribir en GitHub, usa GitHub Desktop o la web de GitHub para subir los archivos modificados.

## Cómo revisar el sitio en el computador

Para una revisión rápida, puedes abrir `index.html` en el navegador. Sin embargo, algunos navegadores bloquean la lectura local de `data/content.json`, porque la página usa `fetch()` para cargar el contenido.

La forma más confiable es levantar un servidor local desde la carpeta del sitio:

```powershell
python -m http.server 8000
```

Luego abre:

```text
http://localhost:8000/
```

Si el puerto 8000 está ocupado, puedes usar otro:

```powershell
python -m http.server 8080
```

Para detener el servidor, vuelve a la ventana de PowerShell y presiona `Ctrl + C`.

## Qué editar cada mes

El archivo más importante es `data/content.json`.

### Próximas actividades

Busca este bloque:

```json
"activities": {
  "upcoming": [
```

La web muestra hasta dos actividades. La primera puede ser una actividad destacada y la segunda puede ser el seminario mensual.

Campos importantes:

| Campo | Significado |
| --- | --- |
| `featured` | `true` si la actividad debe verse más destacada. `false` si es normal. |
| `eyebrow` | Texto pequeño superior, por ejemplo `Seminario mensual`. |
| `title` | Título de la actividad. |
| `location` | Lugar, por ejemplo `Online` o `Manizales, Colombia`. |
| `date_text` | Fecha visible para visitantes. |
| `description` | Descripción breve. |
| `cta_label` | Texto del botón. |
| `url` | Enlace del botón. Puede ser una página interna, un formulario o quedar vacío. |
| `image` | Ruta de imagen. Usa `assets/img/events/placeholder-banner.jpg` como imagen temporal o déjala como `""` si no quieres imagen. |
| `image_alt` | Descripción de la imagen para accesibilidad. |

Ejemplo de seminario mensual con imagen temporal:

```json
{
  "featured": false,
  "eyebrow": "Seminario mensual",
  "title": "Respuestas hidráulicas de plantas bajo sequía",
  "location": "Online",
  "date_text": "15 de junio de 2026 · 12:00 Panamá",
  "description": "Seminario abierto de REDLEV sobre ecofisiología vegetal y estrés hídrico.",
  "cta_label": "Inscripción",
  "url": "https://forms.gle/ejemplo",
  "image": "assets/img/events/placeholder-banner.jpg",
  "image_alt": "Banner del seminario mensual"
}
```

Ejemplo de actividad con imagen:

```json
{
  "featured": true,
  "eyebrow": "Actividad destacada",
  "title": "6to Simposio Latinoamericano de Ecofisiología Vegetal",
  "location": "Manizales, Colombia",
  "date_text": "26, 27 y 28 de octubre de 2026",
  "description": "Encuentro latinoamericano de investigadoras e investigadores en ecofisiología vegetal.",
  "cta_label": "Ver página del simposio",
  "url": "simposio-2026.html",
  "image": "assets/img/events/manizales-colombia.jfif",
  "image_alt": "Vista de Manizales, Colombia"
}
```

### Actividades recientes

Busca este bloque:

```json
"recent": [
```

Ahí puedes mantener actividades ya realizadas, grabaciones de YouTube o eventos pasados. Cada actividad reciente puede incluir una imagen a la izquierda con los campos `image` e `image_alt`.

```json
{
  "title": "Seminario REDLEV de octubre 2025",
  "subtitle": "Impacto de perturbaciones asociadas al cambio climático en los bosques tropicales",
  "speaker": "Dra. Chris Smith-Martin (Universidad de Minnesota)",
  "cta_label": "Ver en YouTube",
  "cta_url": "https://www.youtube.com/watch?v=...",
  "image": "assets/img/events/Seminario_agrivoltaico.png",
  "image_alt": "Afiche del seminario REDLEV de octubre 2025"
}
```

### Investigación destacada

Busca:

```json
"featured_research": {
```

Campos frecuentes:

| Campo | Significado |
| --- | --- |
| `eyebrow` | Texto pequeño superior, por ejemplo `Este mes destacamos`. |
| `title` | Título del artículo. |
| `citation` | Cita bibliográfica. |
| `abstract` | Resumen o descripción. |
| `paper_label` | Texto del botón. |
| `paper_url` | Enlace DOI, revista o repositorio. |
| `image` | Imagen relacionada. |
| `image_alt` | Descripción accesible de la imagen. |

Si el resumen necesita varios párrafos, en JSON se usa `\n\n` para separar párrafos:

```json
"abstract": "Primer párrafo.\n\nSegundo párrafo."
```

### Comité

Busca:

```json
"committee": [
```

Cada integrante usa esta estructura:

```json
{
  "name": "Nombre Apellido",
  "url": "https://enlace-al-perfil.example",
  "focus": "Área de trabajo o línea de investigación",
  "image": "assets/img/committee/foto-integrante.jpg",
  "image_alt": "Nombre Apellido"
}
```

Si una persona no tiene enlace, puedes dejar:

```json
"url": ""
```

Si una persona no tiene fotografía, deja:

```json
"image": "",
"image_alt": ""
```

## Reglas básicas de JSON

`data/content.json` es un archivo JSON. Es fácil de editar, pero tiene reglas estrictas:

1. Los textos van entre comillas dobles: `"texto"`.
2. Después de cada campo va una coma, salvo en el último campo del bloque.
3. Las llaves `{}` agrupan objetos.
4. Los corchetes `[]` agrupan listas.
5. `true` y `false` no llevan comillas.
6. Las rutas deben respetar mayúsculas, minúsculas y extensión.
7. Si no hay enlace o imagen, usa una cadena vacía: `""`.

Ejemplo correcto:

```json
"url": "",
"image": "assets/img/events/foto.jpg",
"featured": false
```

Ejemplo incorrecto:

```json
"url": "",
"image": "assets/img/events/foto.jpg",
"featured": "false",
```

El último ejemplo tiene dos problemas: `false` quedó como texto y sobra una coma final.

## Aprender programación web mirando este sitio

Este sitio es una buena base para aprender porque separa cuatro piezas:

### HTML: la estructura

`index.html` define las partes de la página: encabezado, navegación, secciones, botones y pie de página.

Ejemplo:

```html
<section id="actividades" class="section" aria-label="Próximas actividades">
  <div id="upcomingActivities" class="activities-list"></div>
</section>
```

`id="upcomingActivities"` es importante porque JavaScript usa ese identificador para insertar las actividades.

### CSS: la presentación visual

`assets/css/styles.css` define cómo se ve la web.

Ejemplo:

```css
.button {
  background: var(--accent);
  color: #fff;
  border-radius: var(--radius);
}
```

El CSS decide colores, tamaños, espacios, columnas y comportamiento en pantallas pequeñas.

### JSON: el contenido editable

`data/content.json` guarda datos. No define diseño, solo contenido.

Ejemplo:

```json
"members_count": 144
```

Ese número aparece en la tarjeta de datos de la red.

### JavaScript: la conexión entre datos y página

`assets/js/main.js` carga el JSON y lo pone dentro del HTML.

Ejemplo simplificado:

```js
const response = await fetch("data/content.json");
const data = await response.json();
```

Luego usa funciones como `renderActivities()` y `renderResearch()` para crear el contenido visible.

## Cuándo tocar cada tecnología

| Quiero cambiar... | Archivo probable |
| --- | --- |
| Fecha de seminario | `data/content.json` |
| Artículo destacado | `data/content.json` |
| Enlace a formulario | `data/content.json` |
| Foto de actividad | `assets/img/events/` y `data/content.json` |
| Texto fijo del menú | `index.html` |
| Colores o tamaños | `assets/css/styles.css` |
| Cantidad de actividades visibles | `assets/js/main.js` |
| Nueva página del sitio | Nuevo `.html`, más enlaces desde `index.html` o `data/content.json` |

## Validaciones antes de publicar

Antes de publicar, revisa:

1. `data/content.json` no tiene errores de comas, comillas o llaves.
2. Las imágenes existen en la subcarpeta correcta de `assets/img/`.
3. Las rutas de imágenes coinciden exactamente con el nombre del archivo.
4. Los enlaces abren correctamente.
5. La página se ve bien en computador y celular.
6. Los textos largos no rompen el diseño.
7. Los botones tienen sentido aunque algún enlace esté vacío.

Para validar JSON en PowerShell:

```powershell
Get-Content -Encoding UTF8 -Raw -LiteralPath "data\content.json" | ConvertFrom-Json | Out-Null
```

Si no aparece error, el JSON está bien formado.

## Problemas comunes

### La página queda vacía o no carga contenido

Probablemente hay un error en `data/content.json`. Revisa comas, comillas, llaves y corchetes.

### Una imagen no aparece

Revisa que:

1. La imagen esté subida a la subcarpeta correcta: `assets/img/events/`, `assets/img/committee/`, `assets/img/research/` o `assets/img/site/`.
2. La ruta en JSON empiece con esa subcarpeta.
3. El nombre coincida exactamente.
4. La extensión sea correcta: `.jpg`, `.jpeg`, `.png`, `.webp` o `.jfif`.

### Publiqué cambios, pero no aparecen

Puede ser caché del navegador o demora de GitHub Pages.

Prueba:

1. Esperar unos minutos.
2. Recargar con `Ctrl + F5`.
3. Abrir la web en una ventana privada.
4. Revisar que el cambio quedó guardado en el repositorio correcto.

### Cambié CSS o JavaScript y el navegador muestra la versión antigua

En `index.html`, las rutas tienen una versión al final:

```html
<link rel="stylesheet" href="assets/css/styles.css?v=20260515-7" />
<script src="assets/js/main.js?v=20260515-5" defer></script>
```

Si modificas CSS o JavaScript, cambia el número después de `?v=`. Esto ayuda a que el navegador descargue la versión nueva.

## Buenas prácticas

1. Cambia poco a poco y revisa cada cambio.
2. Escribe mensajes de commit claros: `Actualizar seminario mensual`, `Agregar imagen del simposio`, `Corregir enlace de contacto`.
3. Guarda imágenes optimizadas para web. Evita archivos enormes si no son necesarios.
4. Mantén nombres de archivo simples y descriptivos.
5. No borres archivos antiguos hasta confirmar que ya no se usan.
6. Para cambios de diseño, trabaja localmente y revisa en distintos tamaños de pantalla.
7. Si no entiendes un bloque de código, pide una explicación antes de modificarlo.

## Publicación

La guía específica para publicar está en `PUBLICAR_EN_GITHUB.md`.
