# 🏎️ Proyecto Web: Abecedario Interactivo & La Revolución del Simracing

Este es un proyecto académico de desarrollo web enfocado en la aplicación práctica de flujos de trabajo colaborativos con Git/GitHub (estrategia de branching), diseño responsivo moderno y manipulación del DOM mediante JavaScript.

---

## 🚀 Características del Proyecto

El sitio web está dividido en dos secciones principales totalmente integradas:
* **Abecedario Interactivo (`index.html`):** Una plataforma educativa donde cada tarjeta reacciona al usuario. Al hacer clic en el título de una letra, esta cambia a un color aleatorio, y al pasar el cursor (hover) se revela un objeto secreto asociado.
* **La Revolución del Simracing (`home.html`):** Una landing page de alto impacto visual sobre el automovilismo virtual profesional, optimizada con un diseño responsivo de alto contraste para modos oscuros.

## 🛠️ Tecnologías Utilizadas

* **HTML5** y **CSS3** (Estructuras semánticas y estilos personalizados).
* **Bootstrap 5.3.2** (Sistema de grillas `row/col`, componentes adaptativos y utilidades de color).
* **JavaScript (Vanilla)** (Manejo de eventos de clic, efectos hover y lógica de colores aleatorios).

---

## 📅 Bitácora de Desarrollo & Historial de Avances

### 🔹 Día 1
* **Objetivo:** Creación de la estructura HTML base e incorporación de los componentes multimedia de las letras en formato de tarjetas de imágenes (`img`).
* **Dificultades:** Configuración inicial de las rutas relativas de los assets locales y alineación inicial de los contenedores de imágenes.

### 🔹 Día 2
* **Objetivo:** Implementar la maquetación responsiva con Bootstrap y diseñar el comportamiento interactivo CSS para el efecto *hover* de ocultar/mostrar objetos detrás de las letras.
* **Dificultades:** Evitar el parpadeo visual en las imágenes superpuestas durante la transición del cursor. Se resolvió estructurando correctamente un contenedor de imagen base e imagen hover.

### 🔹 Día 3
* **Objetivo:** Desarrollar la lógica JavaScript para capturar los clics en los títulos y alternar paletas de colores aleatorias de forma dinámica.
* **Dificultades:** Pérdida de legibilidad y contraste del texto al renderizarse sobre fondos oscuros personalizados. Se solucionó migrando a utilidades nativas de modo oscuro de Bootstrap (`data-bs-theme="dark"`) y ajustando el contraste visual.

### 🔹 Día 4
* **Objetivo:** Control de calidad, limpieza de ramas de desarrollo, resolución de conflictos de fusión (merge) e implementación de buenas prácticas en Git.
* **Estado actual de los objetivos:** 🎉 **100% Completado.** El proyecto se encuentra unificado en la rama principal (`main`), totalmente responsivo y libre de errores de consola.

---

## 👥 Integrantes del Equipo (Grupo 7)

El desarrollo y despliegue de este ecosistema web fue realizado de forma conjunta por:
* 🌮 **Jose Estay** — Coordinador de Proyecto
* 🍟 **Valentina Lulic** — Diseñadora Creativa
* 🍔 **Juan Jeldres** — CEO Hamburguesas
* 🌭 **Felipe Miranda** — Catador de Completos
* 🍜 **Christian Lorca** — Desarrollador Front-End

---
*Desarrollado como parte del plan de evaluación práctica de Desarrollo Web de cara al cierre de ciclo corporativo © 2026.*
