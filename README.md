# Manual de usuario · Soluciones Radicales MIP

Documentación pública de uso de Soluciones Radicales MIP, publicada con Mintlify.

## Estructura

```text
index.mdx
configuracion/
└── catalogos-mip.mdx
    └── catalogos-mip/
        └── productos.mdx
media/
└── mip-gestion-productos-v4.mp4
```

La navegación se configura en `docs.json`.

## Fuentes de verdad

El comportamiento funcional se documenta a partir del repositorio `savelasquezs/SPA-soluciones-radicales`, especialmente `docs/product/`, la interfaz vigente y sus pruebas.

Este repositorio contiene documentación para usuarios. La arquitectura, migraciones y detalles internos permanecen en el repositorio de la aplicación.

## Videos

Los videos son material complementario. Las páginas explican el flujo completo en texto y enlazan al segundo exacto del video cuando una interacción se entiende mejor de forma visual.

Los archivos públicos permanentes se almacenan en `media/`.

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
