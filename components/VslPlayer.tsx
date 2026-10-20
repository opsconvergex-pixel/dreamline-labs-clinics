export default function VslPlayer({ src, title }: { src: string; title: string }) {
  return (
    <iframe
      src={src}
      title={title}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
      allowFullScreen
    />
  );
}
