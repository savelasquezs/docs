import { useEffect } from 'react';

export const ManualVideo = ({ id, src, title }) => {
  useEffect(() => {
    const video = document.getElementById(id);
    if (!video) return;

    const url = new URL(window.location.href);
    const seconds = Number(url.searchParams.get('t'));
    if (url.hash !== `#${id}` || !Number.isFinite(seconds) || seconds < 0) return;

    const seek = () => {
      const max = Number.isFinite(video.duration) ? Math.max(0, video.duration - 0.05) : seconds;
      video.currentTime = Math.min(seconds, max);
      video.pause();
      requestAnimationFrame(() => video.scrollIntoView({ behavior: 'smooth', block: 'center' }));
    };

    if (video.readyState >= 1) seek();
    else video.addEventListener('loadedmetadata', seek, { once: true });

    return () => video.removeEventListener('loadedmetadata', seek);
  }, [id, src]);

  return (
    <div className="my-6">
      <video
        id={id}
        controls
        playsInline
        preload="metadata"
        className="w-full aspect-video rounded-xl border border-gray-200 dark:border-gray-800 bg-black scroll-mt-24"
        src={src}
      >
        Tu navegador no puede reproducir este video.
      </video>
      {title ? (
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{title}</p>
      ) : null}
    </div>
  );
};

export const VideoTimestamp = ({ target, seconds, children }) => {
  const seek = (event) => {
    event.preventDefault();

    const video = document.getElementById(target);
    const value = Number(seconds);
    if (!video || !Number.isFinite(value) || value < 0) return;

    const apply = () => {
      const max = Number.isFinite(video.duration) ? Math.max(0, video.duration - 0.05) : value;
      video.currentTime = Math.min(value, max);
      video.pause();
      video.scrollIntoView({ behavior: 'smooth', block: 'center' });
      video.focus?.({ preventScroll: true });
    };

    if (video.readyState >= 1) apply();
    else video.addEventListener('loadedmetadata', apply, { once: true });

    const url = new URL(window.location.href);
    url.searchParams.set('t', String(value));
    url.hash = target;
    window.history.replaceState(null, '', url);
  };

  return (
    <a href={`#${target}`} onClick={seek}>
      {children}
    </a>
  );
};
