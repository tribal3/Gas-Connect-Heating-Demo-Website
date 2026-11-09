import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { business, navLinks } from "../lib/site";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useScrolled } from "../hooks/useScrolled";
import { Logo } from "./ui/Logo";

const sectionIds = ["home", "services", "about", "why-us", "reviews", "gallery", "service-area", "contact"];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const scrolled = useScrolled(16);
  const activeId = useScrollSpy(sectionIds);
  const shouldReduceMotion = useReducedMotion();
  useBodyScrollLock(menuOpen);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    window.setTimeout(() => closeButtonRef.current?.focus(), 80);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const isActive = (href: string) => href === `#${activeId}`;

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition duration-300 ${
          scrolled
            ? "border-slate-200/80 bg-white/95 shadow-[0_12px_35px_-24px_rgba(17,24,39,0.4)] backdrop-blur-xl"
            : "border-slate-200/60 bg-white"
        }`}
      >
        <div className="container-site flex h-[76px] items-center justify-between gap-6">
          <a href="#home" className="shrink-0" aria-label="Gas Connect Heating — back to top">
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-lg px-3 py-2 text-[13px] font-semibold transition ${
                    active
                      ? "text-ink"
                      : "text-slate-500 hover:bg-mist hover:text-ink"
                  }`}
                >
                  {link.label}
                  {active ? (
                    <span className="absolute inset-x-3 -bottom-[1px] h-0.5 rounded-full bg-ember" />
                  ) : null}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center xl:flex">
            <a
              href={business.phoneHref}
              className="btn-primary !px-5 !py-3"
              aria-label={`Call Gas Connect Heating on ${business.phoneDisplay}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {business.phoneDisplay}
            </a>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={business.phoneHref}
              className="grid h-10 w-10 place-items-center rounded-full bg-brand/10 text-brand"
              aria-label={`Call Gas Connect Heating on ${business.phoneDisplay}`}
            >
              <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-ink transition hover:bg-mist"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-0 z-[70] flex flex-col bg-ink text-white xl:hidden"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: "easeOut" }}
          >
            <div className="hero-grid absolute inset-0 opacity-60" aria-hidden="true" />
            <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-ember/10 blur-3xl" aria-hidden="true" />

            <div className="container-site relative flex h-[76px] shrink-0 items-center justify-between border-b border-white/10">
              <Logo variant="light" />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setMenuOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="container-site relative flex flex-1 flex-col overflow-y-auto py-8">
              <nav className="flex flex-col" aria-label="Mobile navigation">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl font-bold tracking-tight text-white"
                    initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: shouldReduceMotion ? 0 : 0.04 * index + 0.05 }}
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-[10px] font-bold tracking-widest text-ember">
                        0{index + 1}
                      </span>
                      {link.label}
                    </span>
                    <ArrowRight className="h-5 w-5 text-slate-500 transition group-hover:translate-x-1 group-hover:text-ember" aria-hidden="true" />
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto pt-8">
                <a href={business.phoneHref} className="btn-primary w-full !py-4 text-base">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call {business.phoneDisplay}
                </a>
                <p className="mt-4 text-center text-xs text-slate-400">
                  Domestic gas &amp; heating services in Manchester
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
