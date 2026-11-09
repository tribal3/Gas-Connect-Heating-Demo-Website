import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
  titleClassName = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal className={`flex flex-col ${alignment} ${className}`}>
      <p className={light ? "section-label-light" : "section-label"}>
        <span className="label-line" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        className={`mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-4xl lg:text-[2.8rem] ${
          light ? "text-white" : "text-ink"
        } ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 max-w-2xl text-[15px] leading-7 sm:text-base ${light ? "text-slate-300" : "text-muted"}`}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
