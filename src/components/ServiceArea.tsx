import { ArrowUpRight, MapPin, Navigation, Phone } from "lucide-react";
import { business, serviceAreaDetails } from "../lib/site";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionSeam } from "./ui/SectionSeam";

export function ServiceArea() {
  return (
    <section id="service-area" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <SectionSeam />
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Service area"
            title="Heating Services Across Manchester"
            description="Gas Connect Heating is associated with Manchester, United Kingdom. If you're in the area and need help with a boiler, heating system or gas appliance, get in touch to discuss your requirements."
          />

          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {serviceAreaDetails.map((detail) => {
              const Icon = detail.icon;

              return (
                <div key={detail.label} className="flex items-center gap-4 py-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mist text-brand">
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                      {detail.label}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-ink">{detail.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Reveal delay={0.1} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={business.phoneHref} className="btn-primary">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {business.phoneDisplay}
            </a>
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold text-ink transition hover:text-brand"
            >
              View the Google listing
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </Reveal>

          <p className="mt-5 max-w-md text-xs leading-5 text-slate-500">
            A street address is not displayed here. Please call or email to confirm whether your
            property can be covered.
          </p>
        </div>

        <Reveal delay={0.12}>
          <div className="map-grid relative overflow-hidden rounded-[28px] border border-slate-200 bg-mist p-6 shadow-soft sm:p-8">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/10 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-ember/10 blur-3xl" aria-hidden="true" />

            <div className="relative flex items-start justify-between">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-ink backdrop-blur-sm">
                <Navigation className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                Manchester
              </span>
              <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-muted backdrop-blur-sm">
                United Kingdom
              </span>
            </div>

            <div className="relative mt-10 flex min-h-[300px] items-center justify-center sm:min-h-[360px]">
              <div className="absolute h-64 w-64 rounded-full border border-brand/15 sm:h-80 sm:w-80" aria-hidden="true" />
              <div className="absolute h-44 w-44 rounded-full border border-brand/20 sm:h-56 sm:w-56" aria-hidden="true" />
              <div className="absolute h-24 w-24 rounded-full border border-ember/25 sm:h-32 sm:w-32" aria-hidden="true" />

              <div className="relative z-10 w-full max-w-[260px] rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-lift">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,0.8)]">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-4 font-display text-lg font-extrabold tracking-[-0.02em] text-ink">
                  Gas Connect Heating
                </p>
                <p className="mt-1 text-xs text-muted">Manchester, United Kingdom</p>
                <a
                  href={business.phoneHref}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand transition hover:text-ember-dark"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  {business.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="relative mt-4 flex items-center justify-between gap-3 border-t border-slate-200 pt-4">
              <p className="text-[11px] leading-5 text-slate-500">
                Local domestic gas &amp; heating support.
              </p>
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="shrink-0 text-[11px] font-bold text-brand transition hover:text-ember-dark"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
