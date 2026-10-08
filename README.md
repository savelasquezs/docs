# Manual de usuario · Soluciones Radicales MIP

Documentación pública de uso de Soluciones Radicales MIP, publicada con Mintlify.

## Estructura

```text
index.mdx
configuracion/
└── catalogos-mip.mdx
    └── catalogos-mip/
        └── productos.mdx
snippets/
└── manual-video.jsx
```

La navegación se configura en `docs.json`.

## Fuentes de verdad

El comportamiento funcional se documenta a partir del repositorio `savelasquezs/SPA-soluciones-radicales`, especialmente `docs/product/`, la interfaz vigente y sus pruebas.

Este repositorio contiene documentación para usuarios. La arquitectura, migraciones y detalles internos permanecen en el repositorio de la aplicación.

## Videos

Los videos son material complementario. Las páginas explican el flujo completo en texto y enlazan al segundo exacto del video cuando una interacción se entiende mejor de forma visual.

Los videos aprobados se almacenan en Cloudflare R2.

## Enlaces al sistema

Las páginas no enlazan directamente al dominio actual de la SPA. Los enlaces contextuales apuntan al resolver estable:

```text
https://sr-doc-app-links.solucionesradicales1.workers.dev/open?to=<ruta-relativa-codificada>
```

Ejemplo para Trampas activas:

```text
/open?to=%2Fconfiguracion%2Fcatalogos%3Ftab%3Dtraps%26estado%3Dactivos
```

El Worker resuelve la ruta contra el dominio vigente de la SPA. Si mañana la aplicación cambia a un dominio propio, se modifica una sola configuración en el Worker y todos los enlaces existentes siguen funcionando.

## Desarrollo local

Instala la CLI de Mintlify:

```bash
npm i -g mint
```

Desde la raíz del repositorio:

```bash
mint dev
```

La vista local se abre normalmente en `http://localhost:3000`.

## Publicación

La rama `main` es la fuente publicada por Mintlify. Los cambios de contenido deben mantener sincronizados:

- páginas MDX;
- navegación;
- medios enlazados;
- metadatos para búsqueda.
