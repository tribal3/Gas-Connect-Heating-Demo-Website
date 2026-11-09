import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Flame, MapPin, Phone, ShieldCheck } from "lucide-react";
import { business } from "../lib/site";
import { GoogleG } from "./ui/GoogleG";
import { Stars } from "./ui/Stars";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden bg-midnight">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(249,115,22,0.17),transparent_34%),radial-gradient(circle_at_6%_78%,rgba(37,99,235,0.24),transparent_38%)]"
        aria-hidden="true"
      />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-brand/10 blur-[110px]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep/40 to-transparent" aria-hidden="true" />

      <div className="container-site relative grid items-center gap-14 pb-24 pt-14 sm:pt-16 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12 lg:pb-32 lg:pt-20 xl:gap-20">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.09, delayChildren: 0.08 }}
          className="relative z-10"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.19em] text-slate-200 sm:text-[11px]">
              Manchester-based gas &amp; heating
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-[15ch] font-display text-[2.75rem] font-extrabold leading-[1.01] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.3rem] xl:text-[4.6rem]"
          >
            Keeping Manchester{" "}
            <span className="relative inline-block text-ember">
              Warm
              <svg
                viewBox="0 0 176 14"
                className="absolute -bottom-2 left-0 h-3 w-full text-ember/80"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <path
                  d="M3 10.5c36-6.2 89-8.3 169-4.4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            , One Home at a Time.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-xl text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8"
          >
            Professional gas and heating services for your home. From boiler
            installations and servicing to heating repairs, get practical solutions
            and professional support from Gas Connect Heating.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a href={business.phoneHref} className="btn-primary !px-7 !py-4 text-[15px]">
              <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
              Call Our Team
            </a>
            <a href="#services" className="btn-outline-light !px-7 !py-4 text-[15px]">
              Explore Our Services
              <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.a
            variants={fadeUp}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
            href={business.googleReviewsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="group mt-8 inline-flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-300 transition hover:text-white"
          >
            <span className="flex items-center gap-2">
              <GoogleG className="h-[18px] w-[18px]" />
              <Stars starClassName="h-3.5 w-3.5" />
            </span>
            <span className="h-4 w-px bg-white/15" aria-hidden="true" />
            <span className="font-semibold text-white">5.0 Google rating</span>
            <span className="text-slate-400">130 customer reviews</span>
            <ArrowRight className="h-3.5 w-3.5 text-ember transition group-hover:translate-x-0.5" aria-hidden="true" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[470px] lg:mr-2 lg:max-w-none"
        >
          <div
            className="absolute -right-3 -top-3 hidden h-full w-full rounded-[30px] border border-ember/30 sm:block"
            aria-hidden="true"
          />
          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full border border-white/10" aria-hidden="true" />
          <div className="absolute -bottom-6 -left-6 grid h-28 w-28 grid-cols-4 gap-2 opacity-30" aria-hidden="true">
            {Array.from({ length: 16 }).map((_, index) => (
              <span key={index} className="h-1 w-1 rounded-full bg-ember" />
            ))}
          </div>

          <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-deep shadow-[0_40px_100px_-30px_rgba(0,0,0,0.65)]">
            <img
              src="/images/hero-gas-engineer.jpg"
              alt="Gas engineer in a blue uniform working on a wall-mounted heating appliance"
              width="1200"
              height="2133"
              loading="eager"
              decoding="async"
              className="h-[400px] w-full object-cover object-[center_32%] sm:h-[520px] lg:h-[610px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/5 to-transparent" aria-hidden="true" />

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ember">
                    Domestic gas &amp; heating
                  </p>
                  <p className="mt-2 font-display text-xl font-bold leading-tight text-white sm:text-2xl">
                    Expert help for your home
                  </p>
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-300">
                    <MapPin className="h-3.5 w-3.5 text-ember" aria-hidden="true" />
                    Manchester, United Kingdom
                  </p>
                </div>
                <span className="hidden h-12 w-12 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm sm:grid">
                  <Flame className="h-5 w-5 text-ember" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -left-3 top-6 rounded-2xl border border-white/10 bg-deep/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-6 sm:px-5 sm:py-4"
          >
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-ember/15 text-ember">
                <ShieldCheck className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Google rating
                </p>
                <div className="mt-0.5 flex items-center gap-2">
                  <span className="font-display text-lg font-extrabold leading-none text-white">5.0</span>
                  <Stars starClassName="h-3 w-3" />
                </div>
              </div>
            </div>
            <p className="mt-2 text-[10px] text-slate-400">130 customer reviews</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 right-8 hidden items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.32em] text-white/25 xl:flex">
        <span className="h-px w-8 bg-white/20" aria-hidden="true" />
        Gas · Boilers · Heating
      </div>
    </section>
  );
}
