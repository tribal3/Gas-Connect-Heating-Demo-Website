import { Star } from "lucide-react";

interface StarsProps {
  className?: string;
  starClassName?: string;
  label?: string;
}

export function Stars({
  className = "",
  starClassName = "h-4 w-4",
  label = "Rated 5 out of 5 stars",
}: StarsProps) {
  return (
    <span className={`inline-flex items-center gap-1 ${className}`} role="img" aria-label={label}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`${starClassName} fill-amber-400 text-amber-400`}
          aria-hidden="true"
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}
