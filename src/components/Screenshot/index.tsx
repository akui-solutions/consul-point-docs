import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

type ScreenshotProps = {
  /** Ruta dentro de static/ (p. ej. "/img/navegacion/menu.png"). Admite .png, .webp, .gif, .mp4 y .webm. */
  src: string;
  /** Variante opcional para el tema oscuro. */
  srcDark?: string;
  alt: string;
  caption?: string;
  className?: string;
};

const isVideo = (path: string) => /\.(mp4|webm)$/i.test(path);

function Media({ src, alt, className }: { src: string; alt: string; className?: string }): React.JSX.Element {
  if (isVideo(src)) {
    // Clips cortos: en bucle y sin sonido, como un GIF pero mucho más ligeros
    return <video src={src} aria-label={alt} autoPlay muted loop playsInline className={className} />;
  }
  return <img src={src} alt={alt} loading="lazy" className={className} />;
}

/**
 * Captura de pantalla (o clip corto) enmarcada como una ventana de la aplicación,
 * con pie de foto opcional. Las imágenes se abren a tamaño completo al hacer clic.
 */
export function Screenshot({ src, srcDark, alt, caption, className }: ScreenshotProps): React.JSX.Element {
  const light = useBaseUrl(src);
  const dark = useBaseUrl(srcDark ?? src);
  const mediaClass = 'block w-full h-auto';

  const media = (url: string, extra = '') =>
    isVideo(url) ? (
      <Media src={url} alt={alt} className={`${mediaClass} ${extra}`} />
    ) : (
      <a href={url} target="_blank" rel="noopener noreferrer" className={`block cursor-zoom-in ${extra}`}>
        <Media src={url} alt={alt} className={mediaClass} />
      </a>
    );

  return (
    <figure className={`mx-0 my-6 ${className ?? ''}`}>
      <div className="overflow-hidden rounded-xl border border-solid border-[var(--cp-border)] bg-[var(--cp-card)] shadow-[0_8px_30px_rgba(15,44,89,0.08)]">
        <div className="flex items-center gap-1.5 border-0 border-b border-solid border-[var(--cp-border)] px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        {srcDark ? (
          <>
            {media(light, 'dark:hidden')}
            {media(dark, 'hidden dark:block')}
          </>
        ) : (
          media(light)
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 text-center font-sans text-sm text-[var(--cp-text-muted)]">{caption}</figcaption>
      )}
    </figure>
  );
}

export default Screenshot;
