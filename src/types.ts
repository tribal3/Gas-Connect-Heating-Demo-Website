import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface TrustItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Service {
  id: string;
  title: string;
  formValue: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ReviewTheme {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
  className: string;
}

export interface AboutHighlight {
  title: string;
  description: string;
}

export interface EnquiryFormValues {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export type EnquiryErrors = Partial<Record<keyof EnquiryFormValues, string>>;
