import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Send,
} from "lucide-react";
import { business, formServiceOptions } from "../lib/site";
import { ENQUIRY_EVENT } from "../lib/enquiry";
import type { EnquiryRequestDetail } from "../lib/enquiry";
import type { EnquiryErrors, EnquiryFormValues } from "../types";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionSeam } from "./ui/SectionSeam";

const initialValues: EnquiryFormValues = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

function validateEnquiry(values: EnquiryFormValues): EnquiryErrors {
  const errors: EnquiryErrors = {};
  const name = values.name.trim();
  const phone = values.phone.replace(/[\s()-]/g, "");
  const email = values.email.trim();
  const message = values.message.trim();

  if (!name) {
    errors.name = "Please enter your full name.";
  } else if (name.length < 2) {
    errors.name = "Please enter at least 2 characters.";
  }

  if (!phone) {
    errors.phone = "Please enter a phone number so the team can get back to you.";
  } else if (!/^(?:\+44\d{10}|0\d{10}|\d{10})$/.test(phone)) {
    errors.phone = "Please enter a valid UK number, for example 07971 291153.";
  }

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = "Please enter a valid email address, for example name@example.com.";
  }

  if (!values.service) {
    errors.service = "Please choose the service you need.";
  }

  if (!message) {
    errors.message = "Please tell us a little about your heating requirements.";
  } else if (message.length < 10) {
    errors.message = "Please add a little more detail (at least 10 characters).";
  }

  return errors;
}

export function Contact() {
  const [values, setValues] = useState<EnquiryFormValues>(initialValues);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleEnquiryRequest = (event: Event) => {
      const customEvent = event as CustomEvent<EnquiryRequestDetail>;
      const requestedService = customEvent.detail?.service;
      if (!requestedService) return;

      setValues((previous) => ({ ...previous, service: requestedService }));
      setErrors((previous) => ({ ...previous, service: undefined }));
      setSubmitted(false);

      window.setTimeout(() => nameInputRef.current?.focus({ preventScroll: true }), 650);
    };

    window.addEventListener(ENQUIRY_EVENT, handleEnquiryRequest);
    return () => window.removeEventListener(ENQUIRY_EVENT, handleEnquiryRequest);
  }, []);

  const handleChange =
    (field: keyof EnquiryFormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { value } = event.target;
      setValues((previous) => ({ ...previous, [field]: value }));
      setErrors((previous) => ({ ...previous, [field]: undefined }));
      if (submitted) setSubmitted(false);
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateEnquiry(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      const firstInvalidField = Object.keys(nextErrors)[0] as keyof EnquiryFormValues;
      document.getElementById(`enquiry-${firstInvalidField}`)?.focus();
      return;
    }

    setSubmitted(true);
  };

  const fieldClass = (field: keyof EnquiryFormValues) =>
    `field ${errors[field] ? "field-error" : ""}`;

  return (
    <section id="contact" className="relative overflow-hidden bg-mist py-20 sm:py-24 lg:py-28">
      <SectionSeam />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent"
        aria-hidden="true"
      />
      <div className="container-site relative">
        <SectionHeading
          align="center"
          eyebrow="Contact us"
          title="Let's Talk About Your Heating Needs"
          description="Looking for professional boiler or heating assistance? Get in touch with Gas Connect Heating to discuss your requirements."
          className="mx-auto"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:gap-8">
          <Reveal>
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-midnight p-7 text-white shadow-soft sm:p-9">
              <div className="hero-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-ember/10 blur-3xl" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-brand/20 blur-3xl" aria-hidden="true" />

              <div className="relative">
                <p className="section-label-light">
                  <span className="label-line" aria-hidden="true" />
                  Direct contact
                </p>
                <h3 className="mt-5 font-display text-2xl font-extrabold tracking-[-0.03em] text-white sm:text-3xl">
                  Speak with the team
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  For the quickest response, call directly. You can also email or send an enquiry
                  using the form.
                </p>

                <div className="mt-8 space-y-3">
                  <a
                    href={business.phoneHref}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-4 transition hover:border-ember/35 hover:bg-white/[0.08]"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ember text-ink">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        Phone
                      </span>
                      <span className="mt-1 block text-base font-bold text-white">
                        {business.phoneDisplay}
                      </span>
                    </span>
                    <ArrowRight className="ml-auto h-4 w-4 text-slate-500 transition group-hover:translate-x-1 group-hover:text-ember" aria-hidden="true" />
                  </a>

                  <a
                    href={business.emailHref}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-4 transition hover:border-brand/40 hover:bg-white/[0.08]"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-white">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        Email
                      </span>
                      <span className="mt-1 block truncate text-sm font-semibold text-white">
                        {business.email}
                      </span>
                    </span>
                    <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-slate-500 transition group-hover:translate-x-1 group-hover:text-brand" aria-hidden="true" />
                  </a>

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-white">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        Location
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-white">
                        {business.location}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-ember" aria-hidden="true" />
                  <p className="text-[11px] leading-5 text-slate-400">
                    Availability can vary. Please call to confirm current opening times before
                    arranging work.
                  </p>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a href={business.phoneHref} className="btn-primary flex-1">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call Now
                  </a>
                  <a href={business.emailHref} className="btn-outline-light flex-1">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
              {submitted ? (
                <div role="status" aria-live="polite" className="flex h-full flex-col justify-center py-6">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-extrabold tracking-[-0.03em] text-ink">
                    Your details have been checked
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-muted">
                    This is a demonstration website, so the enquiry form is not connected to a live
                    inbox. <strong className="font-semibold text-ink">Your message has not been sent.</strong>{" "}
                    To reach Gas Connect Heating, please call or email directly.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a href={business.phoneHref} className="btn-primary">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      {business.phoneDisplay}
                    </a>
                    <a href={business.emailHref} className="btn-outline-dark">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      Email the team
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 self-start text-xs font-bold text-brand transition hover:text-ember-dark"
                  >
                    Back to the form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">
                      <MessageSquareText className="h-[18px] w-[18px]" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-extrabold tracking-[-0.02em] text-ink">
                        Send an enquiry
                      </h3>
                      <p className="text-xs text-muted">Fields marked * are required.</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="enquiry-name" className="mb-1.5 block text-xs font-bold text-ink">
                        Full Name <span className="text-ember-dark">*</span>
                      </label>
                      <input
                        ref={nameInputRef}
                        id="enquiry-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your full name"
                        value={values.name}
                        onChange={handleChange("name")}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "enquiry-name-error" : undefined}
                        className={fieldClass("name")}
                      />
                      {errors.name ? (
                        <p id="enquiry-name-error" className="mt-1.5 text-xs font-medium text-red-600">
                          {errors.name}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label htmlFor="enquiry-phone" className="mb-1.5 block text-xs font-bold text-ink">
                        Phone Number <span className="text-ember-dark">*</span>
                      </label>
                      <input
                        id="enquiry-phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="e.g. 07971 291153"
                        value={values.phone}
                        onChange={handleChange("phone")}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "enquiry-phone-error" : undefined}
                        className={fieldClass("phone")}
                      />
                      {errors.phone ? (
                        <p id="enquiry-phone-error" className="mt-1.5 text-xs font-medium text-red-600">
                          {errors.phone}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label htmlFor="enquiry-email" className="mb-1.5 block text-xs font-bold text-ink">
                        Email Address <span className="text-ember-dark">*</span>
                      </label>
                      <input
                        id="enquiry-email"
                        name="email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        placeholder="name@example.com"
                        value={values.email}
                        onChange={handleChange("email")}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "enquiry-email-error" : undefined}
                        className={fieldClass("email")}
                      />
                      {errors.email ? (
                        <p id="enquiry-email-error" className="mt-1.5 text-xs font-medium text-red-600">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label htmlFor="enquiry-service" className="mb-1.5 block text-xs font-bold text-ink">
                        Service Required <span className="text-ember-dark">*</span>
                      </label>
                      <select
                        id="enquiry-service"
                        name="service"
                        value={values.service}
                        onChange={handleChange("service")}
                        aria-invalid={Boolean(errors.service)}
                        aria-describedby={errors.service ? "enquiry-service-error" : undefined}
                        className={`${fieldClass("service")} appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10`}
                        style={{
                          backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                        }}
                      >
                        <option value="">Select a service</option>
                        {formServiceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.service ? (
                        <p id="enquiry-service-error" className="mt-1.5 text-xs font-medium text-red-600">
                          {errors.service}
                        </p>
                      ) : null}
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="enquiry-message" className="mb-1.5 block text-xs font-bold text-ink">
                        Message <span className="text-ember-dark">*</span>
                      </label>
                      <textarea
                        id="enquiry-message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your boiler or heating requirements..."
                        value={values.message}
                        onChange={handleChange("message")}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? "enquiry-message-error" : undefined}
                        className={`${fieldClass("message")} resize-y`}
                      />
                      {errors.message ? (
                        <p id="enquiry-message-error" className="mt-1.5 text-xs font-medium text-red-600">
                          {errors.message}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
                    <p className="text-[11px] leading-5 text-amber-900">
                      <strong className="font-bold">Demo form:</strong> this enquiry form is not
                      connected to a live inbox. Nothing is sent when you submit it.
                    </p>
                  </div>

                  <button type="submit" className="btn-blue mt-5 w-full">
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
