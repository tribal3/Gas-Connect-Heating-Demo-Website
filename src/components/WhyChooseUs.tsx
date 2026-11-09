import { ArrowRight, ArrowUpRight } from "lucide-react";
import { business, valueProps } from "../lib/site";
import { GoogleG } from "./ui/GoogleG";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionSeam } from "./ui/SectionSeam";
import { Stars } from "./ui/Stars";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-midnight py-20 text-white sm:py-24 lg:py-28">
      <SectionSeam tone="dark" />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand/15 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-ember/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="container-site relative grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
        <div>
          <SectionHeading
            light
            eyebrow="Why choose us"
            title="Why Customers Choose Gas Connect Heating"
            description="A heating service built around clear communication, careful work and a strong local reputation."
          />

          <Reveal delay={0.12} className="mt-9">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-sm">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-ember/10 blur-2xl" aria-hidden="true" />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <GoogleG className="h-5 w-5" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-300">
                      Google rating
                    </span>
                  </div>
                  <div className="mt-3 flex items-end gap-3">
                    <span className="font-display text-5xl font-extrabold leading-none tracking-[-0.05em] text-white">
                      5.0
                    </span>
                    <div className="pb-1">
                      <Stars starClassName="h-4 w-4" />
                      <p className="mt-1.5 text-xs text-slate-400">130 customer reviews</p>
                    </div>
                  </div>
                </div>
                <a
                  href={business.googleReviewsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-white transition hover:border-ember/50 hover:bg-ember/10 hover:text-ember"
                  aria-label="View Gas Connect Heating Google reviews (opens in a new tab)"
                >
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <p className="relative mt-5 border-t border-white/10 pt-4 text-xs leading-5 text-slate-400">
                A 5.0-star rating across 130 reviews on the supplied Google listing — a clear vote of
                confidence from local customers.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-6">
            <a href={business.phoneHref} className="btn-primary w-full sm:w-auto">
              <span className="flex items-center gap-2">
                Call our team
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {valueProps.map((value, index) => {
            const Icon = value.icon;

            return (
              <Reveal key={value.title} delay={0.06 * index}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-ember/35 hover:bg-white/[0.065]">
                  <span className="absolute right-5 top-5 font-display text-xs font-extrabold tracking-[0.2em] text-white/20 transition group-hover:text-ember/50">
                    0{index + 1}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-ember/12 text-ember ring-1 ring-ember/20">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-extrabold tracking-[-0.02em] text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-6 text-slate-400">{value.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
