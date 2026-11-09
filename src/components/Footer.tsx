import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { business, navLinks, services } from "../lib/site";
import { requestEnquiry } from "../lib/enquiry";
import { Logo } from "./ui/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-deep pb-24 pt-16 text-slate-400 lg:pb-0 lg:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-brand/10 blur-[100px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-ember/5 blur-[100px]" aria-hidden="true" />

      <div className="container-site relative">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_0.9fr_1fr_1.15fr] lg:gap-12">
          <div>
            <a href="#home" aria-label="Gas Connect Heating — back to top">
              <Logo variant="light" />
            </a>
            <p className="mt-5 max-w-xs text-[13px] leading-6 text-slate-400">
              Domestic gas and heating services for Manchester homeowners. Boiler installation,
              repairs, servicing, central heating and gas appliance work.
            </p>
            <a
              href={business.googleReviewsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-slate-300 transition hover:text-ember"
            >
              5.0 Google rating · 130 reviews
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">Explore</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">Services</h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#contact"
                    onClick={(event) => {
                      event.preventDefault();
                      requestEnquiry(service.formValue);
                    }}
                    className="text-[13px] text-slate-400 transition hover:text-white"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">Contact</h2>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={business.phoneHref}
                  className="group flex items-start gap-3 text-[13px] text-slate-300 transition hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-ember" aria-hidden="true" />
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Phone
                    </span>
                    <span className="mt-0.5 block font-semibold">{business.phoneDisplay}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={business.emailHref}
                  className="group flex items-start gap-3 text-[13px] text-slate-300 transition hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Email
                    </span>
                    <span className="mt-0.5 block break-all font-semibold">{business.email}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-[13px] text-slate-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember" aria-hidden="true" />
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Location
                  </span>
                  <span className="mt-0.5 block font-semibold">{business.location}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] text-slate-500">
            © {currentYear} Gas Connect Heating. All rights reserved.
          </p>
          <p className="text-[11px] text-slate-500">
            Website concept by{" "}
            <a
              href="https://tribal3.bond"
              target="_blank"
              rel="noreferrer noopener"
              className="font-semibold text-slate-300 underline decoration-slate-600 underline-offset-4 transition hover:text-ember"
            >
              TRIBAL³
            </a>{" "}
            — Built for Growth
          </p>
        </div>
      </div>
    </footer>
  );
}
