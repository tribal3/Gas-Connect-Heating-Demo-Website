import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { business, services } from "../lib/site";
import { requestEnquiry } from "../lib/enquiry";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionSeam } from "./ui/SectionSeam";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-mist py-20 sm:py-24 lg:py-28">
      <SectionSeam />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white to-transparent"
        aria-hidden="true"
      />
      <div className="container-site relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our services"
            title="Complete Heating Solutions for Your Home"
            description="From boiler installations to everyday heating requirements, explore the services Gas Connect Heating can help with."
          />

          <Reveal delay={0.15} className="shrink-0">
            <a
              href={business.phoneHref}
              className="group inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-card"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                  Not sure what you need?
                </span>
                <span className="mt-1 block text-sm font-bold text-ink">{business.phoneDisplay}</span>
              </span>
              <ArrowUpRight className="ml-2 h-4 w-4 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.id} delay={index * 0.05}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_18px_45px_-34px_rgba(17,24,39,0.4)] transition duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-lift">
                  <div className="relative h-48 overflow-hidden bg-slate-200 sm:h-52">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      width="1000"
                      height="750"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep/55 via-deep/5 to-transparent" aria-hidden="true" />
                    <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl border border-white/20 bg-deep/60 text-white backdrop-blur-md">
                      <Icon className="h-5 w-5 text-ember" aria-hidden="true" />
                    </span>
                    <span className="absolute right-4 top-4 font-display text-[11px] font-extrabold tracking-[0.22em] text-white/60">
                      0{index + 1}
                    </span>
                    <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-deep/55 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
                      Domestic heating
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-extrabold tracking-[-0.02em] text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-[13.5px] leading-6 text-muted">
                      {service.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                      <button
                        type="button"
                        onClick={() => requestEnquiry(service.formValue)}
                        className="group/btn inline-flex items-center gap-2 text-[13px] font-bold text-brand transition hover:text-ember-dark"
                      >
                        Enquire Now
                        <ArrowRight className="h-4 w-4 transition group-hover/btn:translate-x-1" aria-hidden="true" />
                      </button>
                      <a
                        href={business.phoneHref}
                        className="text-[11px] font-semibold text-muted transition hover:text-ink"
                        aria-label={`Call about ${service.title}`}
                      >
                        or call us
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-8 flex justify-center">
          <p className="max-w-xl text-center text-xs leading-5 text-slate-500">
            Service availability and suitability depend on your property and system. Call to discuss
            your requirements before booking. Service imagery is illustrative of the type of work
            involved.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
