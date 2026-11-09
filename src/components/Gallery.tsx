import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { galleryItems } from "../lib/site";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionSeam } from "./ui/SectionSeam";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const isOpen = activeIndex !== null;

  useBodyScrollLock(isOpen);

  const closeLightbox = () => {
    setActiveIndex(null);
    window.setTimeout(() => triggerRef.current?.focus(), 60);
  };

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
        window.setTimeout(() => triggerRef.current?.focus(), 60);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? current : (current + 1) % galleryItems.length,
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? current : (current - 1 + galleryItems.length) % galleryItems.length,
        );
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 60);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [isOpen]);

  const activeItem = activeIndex !== null ? galleryItems[activeIndex] : null;

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null ? current : (current - 1 + galleryItems.length) % galleryItems.length,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % galleryItems.length,
    );
  };

  return (
    <section id="gallery" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <SectionSeam />
      <div className="container-site">
        <SectionHeading
          eyebrow="Heating services & equipment"
          title="A Closer Look at Domestic Heating Work"
          description="Boilers, radiators, gas appliances and the equipment involved in domestic heating. The images below are illustrative of the services offered, not photographs of specific Gas Connect Heating projects."
        />

        <div className="mt-11 grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 md:grid-cols-3 lg:auto-rows-[230px]">
          {galleryItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05} className={`${item.className} h-full`}>
              <button
                type="button"
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setActiveIndex(index);
                }}
                className="group relative block h-full w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 text-left shadow-sm transition duration-300 hover:border-brand/30 hover:shadow-card"
                aria-label={`View larger image: ${item.caption}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width="1200"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/10 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-ember">
                    {item.category}
                  </span>
                  <p className="mt-1 font-display text-sm font-bold leading-snug text-white sm:text-base">
                    {item.caption}
                  </p>
                </div>
                <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-deep/40 text-white opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                  <Expand className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs leading-5 text-slate-500">
          Illustrative industry photography. Not presented as completed Gas Connect Heating projects.
        </p>
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Image viewer: ${activeItem.caption}`}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-deep/95 p-4 backdrop-blur-sm sm:p-8"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            onClick={() => closeLightbox()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                closeLightbox();
              }}
              className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:right-8 sm:top-8"
              aria-label="Close image viewer"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <motion.figure
              className="relative w-full max-w-5xl"
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                className="mx-auto max-h-[74vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              />
              <figcaption className="mt-4 text-center text-sm text-slate-300">
                <span className="font-semibold text-white">{activeItem.caption}</span>
                <span className="mx-2 text-slate-600" aria-hidden="true">·</span>
                <span className="text-xs uppercase tracking-[0.16em] text-slate-400">
                  {activeItem.category}
                </span>
              </figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:right-8"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
