import { trustItems } from "../lib/site";
import { Reveal } from "./ui/Reveal";

export function TrustBar() {
  return (
    <section aria-labelledby="trust-bar-title" className="border-b border-slate-200/70 bg-white">
      <h2 id="trust-bar-title" className="sr-only">
        Why customers trust Gas Connect Heating
      </h2>
      <div className="container-site grid grid-cols-1 gap-px overflow-hidden rounded-none py-0 sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal
              key={item.title}
              delay={index * 0.06}
              className="group relative flex items-start gap-4 border-b border-slate-200/70 py-7 sm:px-6 sm:py-9 lg:border-b-0 lg:border-l lg:px-7 lg:first:border-l-0"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mist text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-[13px] font-bold leading-snug text-ink sm:text-sm">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-5 text-muted">{item.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
