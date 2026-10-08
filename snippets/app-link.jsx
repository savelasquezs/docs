const APP_LINK_RESOLVER = 'https://sr-doc-app-links.solucionesradicales1.workers.dev';

export const AppLink = ({ to = '/', children, className, title = 'Abrir en el sistema' }) => {
  if (typeof to !== 'string' || !to.startsWith('/') || to.startsWith('//')) {
    throw new Error('AppLink requiere una ruta relativa que comience con /.');
  }

  const href = `${APP_LINK_RESOLVER}/open?to=${encodeURIComponent(to)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      title={title}
    >
      {children}
    </a>
  );
};
