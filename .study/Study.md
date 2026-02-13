# Estudio de tecnologías y comparativas

Tecnologias a estudiar

- Framework astro
- Shadcn
- Vite
- Flutter
- Taildwind

User: has el estudio de las tecnologias y has una comparativa y cuales se pueden integrar entre si

GitHub Copilot: Aquí tienes un estudio y comparativa de las tecnologías mencionadas, junto con información sobre su integración:

## Estudio de Tecnologías frontend

### Framewords de proyectos

**Astro**

- Framework moderno para crear sitios web rápidos y estáticos.
- Permite usar componentes de React, Vue, Svelte, y otros.
- Optimiza la entrega de contenido, cargando solo lo necesario.

**Flutter**

- Framework de Google para crear aplicaciones móviles, web y desktop.
- Usa Dart como lenguaje principal.
- No está orientado a desarrollo web tradicional, sino a apps multiplataforma.

**Tailwind CSS**

- Framework de CSS utilitario para crear interfaces modernas y responsivas.
- Se integra fácilmente con React, Vue, Svelte, Astro, y otros.
- Permite personalización y diseño rápido.

### Librerias

**Shadcn**

- Librería de componentes UI basada en Radix UI y Tailwind CSS.
- Se integra fácilmente en proyectos React y Next.js.
- Ofrece componentes accesibles y personalizables.

### Herramientas

**Vite**

- Herramienta de construcción y desarrollo rápido para proyectos frontend.
- Compatible con frameworks como React, Vue, Svelte, y Astro.
- Hot Module Replacement (HMR) muy rápido.

## Comparativa

| Tecnología   | Tipo                 | Facilidad de uso | Rendimiento | Comunidad | Integración         |
| ------------ | -------------------- | ---------------- | ----------- | --------- | ------------------- |
| Astro        | Framework web        | Alta             | Muy alto    | Creciente | Excelente           |
| Tailwind CSS | CSS Framework        | Alta             | Alto        | Grande    | Excelente           |
| Shadcn       | UI Components        | Media            | Alto        | Media     | Muy buena           |
| Vite         | Build tool           | Muy alta         | Muy alto    | Grande    | Excelente           |
| Flutter      | Apps multiplataforma | Media            | Alto        | Grande    | Limitada (web/apps) |

## Integraciones posibles

- **Astro + Vite:** Astro usa Vite como motor de build por defecto.
- **Astro + Tailwind CSS:** Integración nativa y recomendada.
- **Vite + Tailwind CSS:** Vite soporta Tailwind CSS fácilmente.
- **Shadcn + Vite + Tailwind CSS:** Shadcn se integra en proyectos React/Next.js que usan Vite y Tailwind.

- **Flutter:** No se integra directamente con las demás tecnologías, ya que es para apps multiplataforma y usa Dart.

## Conclusión

- **Astro, Vite y Tailwind CSS** se pueden integrar perfectamente para crear sitios web modernos y rápidos.

- **Shadcn** se puede usar en proyectos React/Next.js con Vite y Tailwind CSS.

- **Flutter** es independiente y no se integra directamente con las otras tecnologías, pero es ideal para apps móviles y de escritorio.

## css

```css
/*
* sin nada, inicia con ".", inicia con "#":
  Cuando incia sin nada seleciona todos los elementos de ese tipo.
  Cuando inicia con "." seleciona todos los elementos que tienen esa clase.
  Cuando inicia con "#" seleciona el elemento que tiene ese ID.

* Clase vs id:
  Una clase (.) puede aplicarse a múltiples elementos, mientras que un ID (#) debe ser único en la página.
  Las clases son ideales para estilos reutilizables, mientras que los IDs son útiles para identificar elementos específicos.

* Cuando se usa (padre)>(hijo):
  En el selector `.main-content > main` se usa el combinador `>` para aplicar estilos
  únicamente a los elementos `main` que son hijos directos de `.main-content`,
  evitando afectar descendientes más profundos.

 * Cuando usa (selector1, selector2):
  La coma en `h2, p` agrupa selectores independientes para aplicarles las mismas reglas;
  en cambio, `main p` es un selector descendiente que significa “p dentro de main”,
  por eso no lleva coma.

 * Diferencia entre 100vh y 100dvh
 100vh:
  Es el 100% de la altura de la ventana gráfica (viewport height).
  Problema: En móviles, puede incluir la barra de direcciones, lo que a veces causa saltos o recortes.
  100dvh:
  Es el 100% de la altura dinámica de la ventana gráfica, excluyendo barras del navegador (más preciso en móviles modernos).


<ul> significa unordered list (lista desordenada). Se usa para crear listas de elementos con viñetas.
<li> significa list item (elemento de lista). Se usa dentro de <ul> (o <ol>) para definir cada elemento de la lista.
<a> significa anchor (ancla). Se usa para crear enlaces (links) a otras páginas, archivos, o sitios web. El atributo href indica la dirección a la que apunta el enlace.


Elementos estructurales principales de HTML5
Estos son los elementos semánticos principales de HTML5 para estructurar una página:

<header>: Encabezado de la página o sección.
<nav>: Navegación principal (menús, enlaces).
<main>: Contenido principal de la página (solo uno por página).
<section>: Sección temática del contenido.
<article>: Contenido independiente, como un post o noticia.
<aside>: Contenido secundario o complementario (barras laterales, widgets).
<footer>: Pie de página de la página o sección.


background-color solo define el color de fondo de un elemento.
background es una propiedad abreviada (shorthand) que puede incluir color, imagen, posición, tamaño, repetición, origen, clip y attachment del fondo.


<nav> = navegación
<aside> = contenido extra o relacionado

*/

display: none; desaparece
visibility: hidden; /* Oculta pero mantiene el espacio */

flex-wrap: wrap; /* Permite que los elementos pasen a la siguiente línea */
justify-content: center; /* Centra los elementos en cada línea */
```
