import { ArrowUpRight, BadgeCheck, CheckCircle2, Star } from "lucide-react";
import { business, reviewThemes } from "../lib/site";
import { GoogleG } from "./ui/GoogleG";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionSeam } from "./ui/SectionSeam";
import { Stars } from "./ui/Stars";

export function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-mist py-20 sm:py-24 lg:py-28">
      <SectionSeam />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent"
        aria-hidden="true"
      />

      <div className="container-site relative">
        <SectionHeading
          align="center"
          eyebrow="Customer reputation"
          title="Trusted by Customers Across Manchester"
          description="A strong local reputation, supported by a 5.0-star Google rating and 130 customer reviews on the supplied business listing."
          className="mx-auto"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
          <Reveal>
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-soft sm:p-9">
              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-brand/5 blur-2xl" aria-hidden="true" />

              <div className="relative flex items-center gap-2.5">
                <GoogleG className="h-6 w-6" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
                  Google rating
                </span>
              </div>

              <div className="relative mt-6 flex items-end gap-3">
                <span className="font-display text-6xl font-extrabold leading-none tracking-[-0.055em] text-ink">
                  5.0
                </span>
                <div className="pb-1.5">
                  <Stars starClassName="h-[18px] w-[18px]" />
                  <p className="mt-1.5 text-sm font-medium text-muted">out of 5</p>
                </div>
              </div>

              <div className="relative mt-6 flex items-center gap-3 rounded-xl bg-mist px-4 py-3">
                <BadgeCheck className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <p className="text-sm font-semibold text-ink">
                  130 Google reviews
                </p>
              </div>

              <p className="relative mt-5 text-[13px] leading-6 text-muted">
                Rating and review count are shown as supplied on the business&apos;s Google listing.
                You can read the verified customer feedback directly on Google.
              </p>

              <ul className="relative mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                {[
                  "A clear signal of local customer confidence",
                  "Feedback available to read directly on Google",
                  "Rating and count shown as supplied on the listing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs leading-5 text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="relative mt-auto pt-7">
                <a
                  href={business.googleReviewsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-blue w-full"
                >
                  View Google Reviews
                  <span className="sr-only">(opens in a new tab)</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            <Reveal delay={0.08}>
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-card sm:p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-ember-soft px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-ember-dark">
                  <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  Reputation at a glance
                </span>
                <p className="relative mt-4 max-w-xl font-display text-xl font-extrabold leading-snug tracking-[-0.025em] text-ink sm:text-2xl">
                  A 5.0-star average across 130 reviews is the clearest sign of how customers feel
                  about the service.
                </p>
                <p className="relative mt-4 text-xs leading-5 text-muted">
                  We have not reproduced individual review text here, because verified quotations
                  should come directly from the original Google listing.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-3">
              {reviewThemes.map((theme, index) => {
                const Icon = theme.icon;

                return (
                  <Reveal key={theme.title} delay={0.06 * index + 0.1}>
                    <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-card">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">
                        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 text-sm font-bold text-ink">{theme.title}</h3>
                      <p className="mt-1.5 text-xs leading-5 text-muted">{theme.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.18}>
              <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 sm:flex-row sm:items-center">
                <p className="text-xs leading-5 text-muted">
                  Prefer to talk it through? Call and speak with the team directly.
                </p>
                <a
                  href={business.phoneHref}
                  className="shrink-0 text-sm font-bold text-brand transition hover:text-ember-dark"
                >
                  {business.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
