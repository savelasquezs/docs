# AGENTS.md

## Propósito

Este repositorio contiene el manual público de usuario de Soluciones Radicales MIP, construido con Mintlify.

El objetivo es explicar cómo usar el sistema con texto claro, procedimientos breves, reglas de negocio y videos de apoyo. La documentación técnica del producto permanece en el repositorio `savelasquezs/SPA-soluciones-radicales`.

## Fuentes de verdad

Antes de documentar una funcionalidad:

1. Revisar `docs/product/` del repositorio de la SPA para reglas y comportamiento aprobado.
2. Revisar la interfaz y las pruebas vigentes para nombres exactos de campos, botones, estados y validaciones.
3. Usar los storyboards y `timeline.json` de los videos para enlaces temporales exactos.
4. No inventar comportamiento ni completar vacíos con supuestos.

Si la interfaz y la documentación funcional se contradicen, detener únicamente la parte afectada hasta resolverla.

## Estilo

- Escribir en español.
- Usar voz activa y segunda persona.
- Mantener frases cortas y una idea por oración.
- Usar sentence case en títulos.
- Escribir en **negrita** los controles visibles de la interfaz.
- Usar código para nombres de archivos, rutas o comandos.
- Explicar primero el objetivo y luego el procedimiento.
- Evitar texto obvio, repetitivo o decorativo.
- La documentación escrita es la referencia principal; el video es apoyo visual.

## Videos

- Cada módulo o flujo principal puede tener un video integral.
- No crear un video por cada botón si varias acciones pertenecen al mismo flujo.
- Los enlaces **Ver en el video** deben apuntar al segundo exacto en que comienza la acción.
- Los videos públicos se almacenan en `media/` dentro de este repositorio.
- La URL publicada debe ser accesible sin autenticación.
- No usar artefactos temporales de GitHub Actions como enlaces permanentes.

## Contenido de usuario

Documentar:

- dónde encontrar una función;
- requisitos previos;
- significado de los campos;
- pasos para completar la tarea;
- resultado esperado;
- diferencias entre acciones similares;
- errores y recuperación cuando sean relevantes;
- preguntas que una persona probablemente buscaría.

No documentar:

- secretos;
- credenciales;
- detalles internos de infraestructura sin valor para el usuario;
- migraciones, RLS, endpoints o implementación backend salvo que el usuario deba conocerlos;
- funciones que todavía no existan.

## Navegación

Organizar por el lenguaje del producto y por tareas reales. Para Catálogos MIP:

- Introducción
- Productos
- Métodos de aplicación
- Plagas
- Trampas
- Criterios MIP

Las páginas deben incluir palabras y preguntas que mejoren la búsqueda sin duplicar contenido innecesariamente.

## Validación

Antes de publicar:

- comprobar que los nombres coinciden con la interfaz;
- revisar que los enlaces internos funcionan;
- comprobar que los videos son públicos;
- verificar los enlaces con tiempo;
- revisar desktop y móvil;
- evitar páginas huérfanas;
- mantener `docs.json` y la navegación coherentes.
