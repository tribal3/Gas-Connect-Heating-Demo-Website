import { useId } from "react";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const gradientId = useId();
  const isLight = variant === "light";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className={`relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl ${
          isLight ? "bg-white/10 ring-1 ring-white/15" : "bg-ink"
        }`}
      >
        <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ember/20 to-transparent" />
        <svg
          viewBox="0 0 40 40"
          className="relative h-7 w-7"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id={gradientId} x1="20" y1="4" x2="22" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDBA74" />
              <stop offset="0.55" stopColor="#F97316" />
              <stop offset="1" stopColor="#EA580C" />
            </linearGradient>
          </defs>
          <path
            d="M22.8 3.5c.8 6.1-3.8 8.7-3.8 13.4 0 2.3 1.3 3.9 3.3 3.9 2.1 0 3.4-1.6 3.4-3.9 0-1.2-.4-2.3-1.1-3.3 3.6 2.2 5.9 5.5 5.9 9.6 0 5.4-4.2 9.8-10 9.8S10.6 28.6 10.6 23.2c0-4.2 2.5-7.3 6.1-10.3 0 3.8 1.8 5.7 3.4 5.7 1.5 0 2.4-1.1 2.4-2.8 0-3.6-2.5-5.8-.6-12.3z"
            fill={`url(#${gradientId})`}
          />
          <path
            d="M20 29.6c-2.1 0-3.7-1.6-3.7-3.7 0-1.5.8-2.6 2.2-3.9.4 1.5 1.1 2.2 1.8 2.2.8 0 1.3-.6 1.3-1.5 0-.4-.1-.8-.3-1.2 1.4.9 2.3 2.2 2.3 4 0 2.3-1.5 4.1-3.6 4.1z"
            fill={isLight ? "#111827" : "#FFFFFF"}
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[17px] font-extrabold leading-none tracking-[-0.02em] ${
            isLight ? "text-white" : "text-ink"
          }`}
        >
          GAS CONNECT
        </span>
        <span
          className={`mt-1.5 text-[9px] font-bold leading-none tracking-[0.38em] ${
            isLight ? "text-slate-400" : "text-muted"
          }`}
        >
          HEATING
        </span>
      </span>
    </span>
  );
}
