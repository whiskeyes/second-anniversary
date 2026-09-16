import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, X } from "lucide-react";

const assetUrls = import.meta.glob("/src/assets/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const rotationClasses = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3"];
const galleryPhotos = Object.entries(assetUrls)
  .filter(([path]) => !/\/home-[1-4]\.(jpg|jpeg|png|webp)$/.test(path))
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([path, src], index) => ({
    src,
    alt: `A memory from us ${index + 1}`,
    rotate: rotationClasses[index % rotationClasses.length],
  }));

const spreadTitles = ["the beginning", "the little things", "favorite days", "still us"];
const spreadNotes = [
  "the first pages of us ♡",
  "the moments I keep close ♡",
  "ordinary days feel better with you ♡",
  "more pages are waiting for us ♡",
];
const photosPerSpread = Math.ceil(galleryPhotos.length / 4);
const collageSpreads = Array.from({ length: 4 }, (_, index) => {
  const start = index * photosPerSpread;
  return {
    title: spreadTitles[index],
    note: spreadNotes[index],
    photos: galleryPhotos.slice(start, start + photosPerSpread),
  };
});

export default function FlipBook({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [spread, setSpread] = useState(0);

  useEffect(() => {
    if (!open) return;
    setSpread(0);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setSpread((current) => Math.min(current + 1, collageSpreads.length - 1));
      if (e.key === "ArrowLeft") setSpread((current) => Math.max(current - 1, 0));
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-deep-rose/40 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Photo flipbook"
    >
      <div className="relative mx-auto my-4 w-full max-w-5xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-[32px] border border-border/60 bg-card p-5 shadow-[var(--shadow-soft)] md:my-6 md:max-h-[calc(100vh-3rem)] md:p-7" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          aria-label="Close photo flipbook"
          className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-blush text-deep-rose shadow-[var(--shadow-soft)] transition-transform hover:scale-110"
        >
          <X className="size-4" />
        </button>

        <div className="mb-6 text-center">
          <div className="mb-3 flex items-center justify-center gap-3 text-rose">
            <Heart className="size-5" fill="currentColor" />
            <Heart className="size-5" fill="currentColor" />
          </div>
          <p className="text-[10px] tracking-[0.35em] text-rose">our memories</p>
          <h2 className="mt-3 font-display text-4xl text-deep-rose md:text-5xl">our little flipbook ♡</h2>
        </div>

        <div className="rounded-[26px] bg-[#f9e7ed] p-4 md:p-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-rose">page {spread + 1} of {collageSpreads.length}</p>
              <h3 className="mt-2 font-display text-2xl text-deep-rose">{collageSpreads[spread].title}</h3>
            </div>
            <p className="hidden text-right text-xs tracking-[0.12em] text-muted-foreground sm:block">{collageSpreads[spread].note}</p>
          </div>

          <div className="grid grid-cols-2 auto-rows-[150px] content-start gap-3 overflow-y-auto rounded-[18px] bg-[#f5dfe8] p-3 md:auto-rows-[170px] md:grid-cols-3 md:gap-4 md:p-5">
            {collageSpreads[spread].photos.map((photo) => {
              return (
                <div
                  key={photo.alt}
                  className={`polaroid flex min-h-28 items-center justify-center overflow-hidden bg-white p-2 shadow-[var(--shadow-soft)] md:p-3 ${photo.rotate}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full max-h-52 w-full object-contain"
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <button
              onClick={() => setSpread((current) => Math.max(current - 1, 0))}
              disabled={spread === 0}
              aria-label="Previous page"
              className="grid size-10 place-items-center rounded-full bg-white/75 text-deep-rose shadow-[var(--shadow-soft)] transition-opacity disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2" aria-label="Flipbook pages">
              {collageSpreads.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSpread(index)}
                  aria-label={`Go to page ${index + 1}`}
                  className={`size-2.5 rounded-full transition-colors ${spread === index ? "bg-rose" : "bg-white/80"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setSpread((current) => Math.min(current + 1, collageSpreads.length - 1))}
              disabled={spread === collageSpreads.length - 1}
              aria-label="Next page"
              className="grid size-10 place-items-center rounded-full bg-white/75 text-deep-rose shadow-[var(--shadow-soft)] transition-opacity disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
