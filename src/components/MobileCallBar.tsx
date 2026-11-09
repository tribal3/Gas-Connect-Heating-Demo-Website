import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageSquareText, Phone } from "lucide-react";
import { business } from "../lib/site";
import { useScrolled } from "../hooks/useScrolled";

export function MobileCallBar() {
  const visible = useScrolled(520);
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={shouldReduceMotion ? false : { y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 70, opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-deep/95 px-3 pb-[calc(0.625rem+env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-xl lg:hidden"
        >
          <div className="grid grid-cols-2 gap-2">
            <a href={business.phoneHref} className="btn-primary !py-3 text-[13px]">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </a>
            <a href="#contact" className="btn-outline-light !py-3 text-[13px]">
              <MessageSquareText className="h-4 w-4" aria-hidden="true" />
              Enquire
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
