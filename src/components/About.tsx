import { ArrowRight, Check, MapPin, Phone } from "lucide-react";
import { aboutHighlights, business } from "../lib/site";
import { GoogleG } from "./ui/GoogleG";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionSeam } from "./ui/SectionSeam";
import { Stars } from "./ui/Stars";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <SectionSeam />
      <div
        className="pointer-events-none absolute -right-40 top-24 h-96 w-96 rounded-full bg-brand/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative order-2 lg:order-1">
          <div className="absolute -left-4 -top-4 hidden h-28 w-28 rounded-2xl border border-ember/30 sm:block" aria-hidden="true" />
          <div className="absolute -bottom-6 right-6 h-40 w-40 rounded-full bg-ember/5 blur-2xl" aria-hidden="true" />

          <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-mist shadow-soft">
            <img
              src="/images/about-gas-engineer.jpg"
              alt="Heating engineer working on a wall-mounted boiler and hot water cylinder"
              width="1400"
              height="1050"
              loading="lazy"
              decoding="async"
              className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/55 via-transparent to-transparent" aria-hidden="true" />

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-deep/55 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                <MapPin className="h-3.5 w-3.5 text-ember" aria-hidden="true" />
                Manchester, United Kingdom
              </span>
              <span className="hidden rounded-full border border-white/15 bg-deep/55 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:inline-flex">
                Domestic gas &amp; heating
              </span>
            </div>
          </div>

          <Reveal
            delay={0.2}
            className="absolute -bottom-8 left-4 w-[220px] rounded-2xl border border-slate-200 bg-white p-5 shadow-lift sm:-right-6 sm:left-auto sm:w-[248px]"
          >
            <div className="flex items-center gap-2.5">
              <GoogleG className="h-5 w-5" />
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                Google reviews
              </span>
            </div>
            <div className="mt-3 flex items-end gap-2">
              <span className="font-display text-4xl font-extrabold leading-none tracking-[-0.04em] text-ink">
                5.0
              </span>
              <Stars starClassName="h-3.5 w-3.5" className="pb-1" />
            </div>
            <p className="mt-2 text-xs font-medium text-muted">from 130 customer reviews</p>
          </Reveal>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="About Gas Connect Heating"
            title="Your Local Gas & Heating Specialists"
            description="Gas Connect Heating provides domestic gas and heating services for customers in Manchester. Whether you're planning a boiler installation, need help with a heating issue, or want to maintain your existing system, the focus is on practical solutions and professional service."
          />

          <div className="mt-9 grid gap-x-6 gap-y-5 sm:grid-cols-2">
            {aboutHighlights.map((highlight, index) => (
              <Reveal key={highlight.title} delay={0.05 * index} className="flex gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ember-soft text-ember-dark">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink">{highlight.title}</h3>
                  <p className="mt-1 text-[13px] leading-5 text-muted">{highlight.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={business.phoneHref} className="btn-primary">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {business.phoneDisplay}
            </a>
            <a href="#services" className="group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold text-ink transition hover:text-brand">
              View our services
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
