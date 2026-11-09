export const ENQUIRY_EVENT = "gas-connect-heating:enquiry";

export interface EnquiryRequestDetail {
  service: string;
}

export function requestEnquiry(service: string) {
  window.dispatchEvent(
    new CustomEvent<EnquiryRequestDetail>(ENQUIRY_EVENT, {
      detail: { service },
    }),
  );

  const contactSection = document.getElementById("contact");
  if (!contactSection) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  contactSection.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });
}
