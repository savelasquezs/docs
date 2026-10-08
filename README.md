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
├── app-link.jsx
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

Las páginas no enlazan directamente al dominio actual de la SPA. Usan `AppLink` desde `snippets/app-link.jsx`.

`AppLink` recibe una ruta relativa, por ejemplo:

```mdx
<AppLink to="/configuracion/catalogos?tab=traps&estado=activos">
  abrir Trampas directamente
</AppLink>
```

El componente apunta al Worker estable `sr-doc-app-links.solucionesradicales1.workers.dev`, que resuelve esa ruta contra el dominio vigente de la SPA. Si el dominio cambia, se actualiza únicamente el Worker y los enlaces existentes continúan funcionando.

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
