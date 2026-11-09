import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrolled } from "../hooks/useScrolled";

export function BackToTop() {
  const visible = useScrolled(700);
  const shouldReduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: shouldReduceMotion ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          className="fixed bottom-6 right-6 z-40 hidden h-11 w-11 place-items-center rounded-full border border-white/15 bg-ink text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-midnight lg:grid"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
