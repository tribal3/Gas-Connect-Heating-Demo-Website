interface SectionSeamProps {
  tone?: "light" | "dark";
}

export function SectionSeam({ tone = "light" }: SectionSeamProps) {
  const lineColor = tone === "dark" ? "bg-white/15" : "bg-slate-200/90";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-center"
    >
      <span className={`h-px flex-1 ${lineColor}`} />
      <span className="mx-3 h-[7px] w-[7px] rotate-45 border border-ember bg-ember/90 shadow-[0_0_0_3px_rgba(249,115,22,0.12)] sm:mx-4" />
      <span className={`h-px flex-1 ${lineColor}`} />
    </div>
  );
}
