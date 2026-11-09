import { Flame, Phone } from "lucide-react";
import { business } from "../lib/site";

export function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden bg-deep text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(249,115,22,0.16),transparent_38%)]" />
      <div className="container-site relative flex h-10 items-center justify-between gap-4 text-[11px] sm:text-xs">
        <p className="flex min-w-0 items-center gap-2 text-slate-200">
          <Flame className="h-3.5 w-3.5 shrink-0 text-ember" aria-hidden="true" />
          <span className="truncate">
            Professional Gas &amp; Heating Services Across Manchester
          </span>
        </p>
        <a
          href={business.phoneHref}
          className="-my-2 flex shrink-0 items-center gap-2 py-2 font-semibold text-white transition hover:text-ember"
          aria-label={`Call Gas Connect Heating on ${business.phoneDisplay}`}
        >
          <Phone className="h-3.5 w-3.5 text-ember" aria-hidden="true" />
          <span className="hidden sm:inline">{business.phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
}
