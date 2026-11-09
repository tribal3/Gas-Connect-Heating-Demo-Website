import {
  Flame,
  RefreshCw,
  ShieldCheck,
  Wrench,
  ThermometerSun,
  CookingPot,
  Star,
  MessageSquareText,
  Lightbulb,
  Sparkles,
  House,
  Gauge,
  ClipboardCheck,
  MapPin,
  Phone,
} from "lucide-react";
import type {
  AboutHighlight,
  GalleryItem,
  NavLink,
  ReviewTheme,
  Service,
  TrustItem,
  ValueProp,
} from "../types";

export const business = {
  name: "Gas Connect Heating",
  phoneDisplay: "+44 7971 291153",
  phoneLocal: "07971 291153",
  phoneHref: "tel:+447971291153",
  email: "gasconnectheating@hotmail.com",
  emailHref: "mailto:gasconnectheating@hotmail.com",
  location: "Manchester, United Kingdom",
  rating: "5.0",
  reviewCount: "130",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Gas+Connect+Heating+Manchester+07971291153",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Gas+Connect+Heating+Manchester+07971291153",
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const services: Service[] = [
  {
    id: "boiler-installation",
    title: "Boiler Installation",
    formValue: "Boiler Installation",
    description:
      "A considered, professional installation of a new domestic boiler, with the system set up properly from the start.",
    image: "/images/service-boiler-installation.jpg",
    imageAlt: "Heating engineer servicing a modern wall-mounted boiler",
    icon: Flame,
  },
  {
    id: "boiler-repairs",
    title: "Boiler Repairs",
    formValue: "Boiler Repair",
    description:
      "Diagnosis and repair for boiler faults, helping to get your heating and hot water back to normal.",
    image: "/images/service-boiler-repairs.jpg",
    imageAlt: "Gloved engineer fitting a valve to a white radiator",
    icon: Wrench,
  },
  {
    id: "boiler-servicing",
    title: "Boiler Servicing",
    formValue: "Boiler Servicing",
    description:
      "Routine servicing to check your boiler is working as it should and to help keep your system reliable.",
    image: "/images/service-boiler-servicing.jpg",
    imageAlt: "Engineer carrying out maintenance on a wall-mounted boiler",
    icon: ShieldCheck,
  },
  {
    id: "boiler-replacement",
    title: "Boiler Replacement",
    formValue: "Boiler Replacement",
    description:
      "Replacing an ageing boiler with a suitable modern system for your home and how you use it.",
    image: "/images/service-boiler-replacement.jpg",
    imageAlt: "Close-up of copper pipework and heating system connections",
    icon: RefreshCw,
  },
  {
    id: "central-heating",
    title: "Central Heating",
    formValue: "Central Heating",
    description:
      "Support with radiators, heating controls and domestic central heating systems, from repairs to upgrades.",
    image: "/images/service-central-heating.jpg",
    imageAlt: "White radiator installed in a bright domestic room",
    icon: ThermometerSun,
  },
  {
    id: "gas-appliances",
    title: "Gas Appliances",
    formValue: "Gas Appliances",
    description:
      "Installation and work on domestic gas appliances, including cookers, hobs and gas fires.",
    image: "/images/service-gas-appliances.jpg",
    imageAlt: "Modern stainless steel gas hob in a domestic kitchen",
    icon: CookingPot,
  },
];

export const formServiceOptions = [
  "Boiler Installation",
  "Boiler Repair",
  "Boiler Servicing",
  "Boiler Replacement",
  "Central Heating",
  "Gas Appliances",
  "Other",
] as const;

export const trustItems: TrustItem[] = [
  {
    title: "5-Star Google Reputation",
    description: "Rated 5.0 from 130 reviews on the supplied Google listing.",
    icon: Star,
  },
  {
    title: "Professional Heating Services",
    description: "A service focus built around domestic boilers and heating.",
    icon: Gauge,
  },
  {
    title: "Customer-Focused Approach",
    description: "Clear communication and practical help with your requirements.",
    icon: MessageSquareText,
  },
  {
    title: "Domestic Gas Expertise",
    description: "Experience across boilers, central heating and gas appliances.",
    icon: House,
  },
];

export const valueProps: ValueProp[] = [
  {
    title: "Strong Customer Reputation",
    description:
      "A 5.0-star Google rating supported by 130 reviews on the supplied listing — a clear vote of confidence from local customers.",
    icon: Star,
  },
  {
    title: "Heating & Boiler Expertise",
    description:
      "A service offering centred on domestic boilers, central heating systems and gas appliances.",
    icon: Flame,
  },
  {
    title: "Customer-Focused Service",
    description:
      "Straightforward communication, so you can understand your heating requirements and the options available.",
    icon: MessageSquareText,
  },
  {
    title: "Practical Solutions",
    description:
      "Helpful advice and sensible options for your boiler and heating needs, without unnecessary complication.",
    icon: Lightbulb,
  },
];

export const aboutHighlights: AboutHighlight[] = [
  {
    title: "Local to Manchester",
    description: "A domestic gas and heating service for Manchester homeowners.",
  },
  {
    title: "Boiler & heating focus",
    description: "Installations, repairs, servicing and central heating support.",
  },
  {
    title: "Clear communication",
    description: "Plain-English guidance on what your home needs and why.",
  },
  {
    title: "Careful workmanship",
    description: "Attention to the detail of every installation and repair.",
  },
];

export const reviewThemes: ReviewTheme[] = [
  {
    title: "Professional service",
    description: "Customers value a knowledgeable, professional approach to the work.",
    icon: ClipboardCheck,
  },
  {
    title: "Friendly communication",
    description: "Clear explanations and a helpful manner are part of the service.",
    icon: MessageSquareText,
  },
  {
    title: "Quality workmanship",
    description: "A focus on doing the job properly and leaving things neat.",
    icon: Sparkles,
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "boiler-service",
    src: "/images/gallery-boiler-service.jpg",
    alt: "Heating engineer inspecting a wall-mounted boiler",
    caption: "Boiler servicing and inspection",
    category: "Boiler care",
    className: "col-span-2 row-span-2",
  },
  {
    id: "radiator-home",
    src: "/images/gallery-radiator-home.jpg",
    alt: "White radiator with a plant in a sunlit room",
    caption: "Radiators and warm living spaces",
    category: "Home comfort",
    className: "",
  },
  {
    id: "pipework",
    src: "/images/gallery-pipework.jpg",
    alt: "Gloved engineer fitting a valve to a radiator",
    caption: "Radiator valves and system connections",
    category: "Workmanship",
    className: "",
  },
  {
    id: "gas-hob",
    src: "/images/gallery-gas-hob.jpg",
    alt: "Stainless steel gas hob in a modern kitchen",
    caption: "Gas cooker and hob installation",
    category: "Gas appliances",
    className: "",
  },
  {
    id: "living-room-radiator",
    src: "/images/gallery-living-room-radiator.jpg",
    alt: "White radiator beneath a window in a calm living room",
    caption: "Domestic central heating",
    category: "Home comfort",
    className: "md:col-span-2",
  },
];

export const serviceAreaDetails = [
  {
    label: "Location",
    value: "Manchester, United Kingdom",
    icon: MapPin,
  },
  {
    label: "Services",
    value: "Domestic gas, boiler & heating work",
    icon: Flame,
  },
  {
    label: "Contact",
    value: business.phoneDisplay,
    icon: Phone,
  },
];
