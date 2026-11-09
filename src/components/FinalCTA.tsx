import { ArrowRight, Phone } from "lucide-react";
import { business } from "../lib/site";
import { Reveal } from "./ui/Reveal";
import { SectionSeam } from "./ui/SectionSeam";

export function FinalCTA() {
  return (
    <section aria-labelledby="final-cta-title" className="relative bg-white pb-20 pt-10 sm:pb-24 sm:pt-12 lg:pb-28 lg:pt-14">
      <SectionSeam />
      <div className="container-site">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-brand via-brand-dark to-midnight px-6 py-12 shadow-[0_40px_90px_-40px_rgba(37,99,235,0.65)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-ember/25 blur-[90px]" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-white/10 blur-[80px]" aria-hidden="true" />
            <div className="pointer-events-none absolute right-10 top-1/2 hidden h-40 w-40 -translate-y-1/2 rounded-full border border-white/15 lg:block" aria-hidden="true" />
            <div className="pointer-events-none absolute right-16 top-1/2 hidden h-24 w-24 -translate-y-1/2 rounded-full border border-ember/40 lg:block" aria-hidden="true" />

            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
              <div>
                <p className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-label text-ember">
                  <span className="inline-block h-px w-8 bg-current opacity-70" aria-hidden="true" />
                  Ready when you are
                </p>
                <h2
                  id="final-cta-title"
                  className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-[1.06] tracking-[-0.04em] text-white sm:text-4xl lg:text-[2.9rem]"
                >
                  Ready to Get Your Heating Sorted?
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
                  Speak with Gas Connect Heating about your boiler and domestic heating
                  requirements.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href={business.phoneHref} className="btn-primary !px-7 !py-4 text-[15px]">
                  <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
                  Call {business.phoneDisplay}
                </a>
                <a href="#contact" className="btn-outline-light !px-7 !py-4 text-[15px]">
                  Send an enquiry
                  <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
