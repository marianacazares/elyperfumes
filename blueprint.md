# Blueprint: Sitio Web de Perfumes "ely"

## Visión General

Este documento describe el plan de desarrollo para el sitio web de "ely", una tienda en línea de perfumes. El sitio se construirá utilizando HTML y CSS puros, con un diseño elegante y moderno basado en las imágenes proporcionadas por el usuario. El sitio constará de 5 páginas: Inicio, Catálogo, Nosotros, Aroma Ideal y Contacto.

## Diseño y Estilo

El diseño se centrará en una estética sofisticada y minimalista.

*   **Paleta de Colores:**
    *   Fondo Principal: Un beige suave y cálido (ej. `#f7f2ec`).
    *   Acento Borgoña: Un rojo oscuro y rico para la cabecera, botones y elementos destacados (ej. `#6a1e2d`).
    *   Acento Dorado: Un color ocre/dorado para botones y llamadas a la acción (ej. `#c58a2d`).
    *   Texto: Gris oscuro para la legibilidad (ej. `#333333`).
*   **Tipografía:** Se utilizarán las fuentes proporcionadas por el usuario. Mientras tanto, se usarán fuentes de Google Fonts que se asemejen al diseño: un serif elegante para los títulos y un sans-serif limpio para el cuerpo del texto.
*   **Layout:** El diseño será centrado, con amplio uso de espacio en blanco para crear una sensación de lujo y enfoque. Se utilizarán formas suaves y redondeadas, especialmente en el pie de página y en los elementos decorativos de fondo.

## Estructura del Sitio y Plan de Desarrollo

### 1. Archivos del Proyecto
*   `index.html` (Página de Inicio)
*   `catalogo.html` (Página de Catálogos)
*   `nosotros.html` (Página Sobre Nosotros)
*   `aroma-ideal.html` (Página "Encuentra tu aroma ideal")
*   `contacto.html` (Página de Contacto)
*   `style.css` (Hoja de estilos principal)
*   `main.js` (Para futuras interacciones)
*   `blueprint.md` (Este archivo)
*   `/images/` (Directorio para todas las imágenes del sitio)
*   `/fonts/` (Directorio para los archivos de tipografía)

### 2. Plan de Implementación Actual

La tarea actual es maquetar la página de inicio (`index.html`) y crear los archivos vacíos para las demás secciones, basándose en la primera imagen proporcionada.

#### Pasos Detallados:

1.  **Crear directorios:** Crear las carpetas `/images` y `/fonts` para organizar los recursos.
2.  **Crear archivos HTML:** Generar `catalogo.html`, `nosotros.html`, y `aroma-ideal.html`.
3.  **Maquetar `index.html`:**
    *   **Cabecera (`<header>`):** Fondo borgoña, logo a la izquierda y menú de navegación a la derecha (Inicio, Perfumes, Sobre nosotros, Contacto).
    *   **Sección Hero (`<section class="hero">`):** Título principal, subtítulo y botón "COMPRA AHORA" a la izquierda. Imagen de producto a la derecha.
    *   **Sección Beneficios (`<section class="benefits">`):** Título "¿Por qué elegir Ely?" y tres tarjetas de beneficios con iconos y fondo borgoña.
    *   **Sección CTA (`<section class="cta">`):** Botón "Tu fragancia te espera, ordénala aquí".
    *   **Sección Catálogos (`<section class="catalog-promo">`):** Imagen a la izquierda, texto y botón "VER CÁTALOGOS" a la derecha.
    *   **Sección Aroma Ideal (`<section class="aroma-finder">`):** Texto a la izquierda y una imagen circular a la derecha.
    *   **Pie de Página (`<footer>`):** Diseño redondeado con secciones de Ayuda, Contacto y Legal, iconos de redes sociales y el logo final.
4.  **Estilizar con `style.css`:**
    *   Implementar la paleta de colores, tipografías (temporales) y el layout general.
    *   Usar Flexbox y Grid para una maquetación moderna y adaptable.
    *   Definir estilos para todos los elementos de la página de inicio.
    *   Añadir placeholders visuales para las imágenes que faltan.

