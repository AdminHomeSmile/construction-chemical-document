import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex min-w-0 items-center gap-2", className)}>
      <svg viewBox="0 0 32 32" className="size-8 shrink-0" aria-hidden="true">
        <rect width="32" height="32" rx="6" fill="currentColor" className="text-brand" />
        <path
          d="M16 6.5c0 0 6.2 6.4 6.2 11.1A6.2 6.2 0 1 1 9.8 17.6C9.8 12.9 16 6.5 16 6.5Z"
          fill="#fffdf9"
        />
      </svg>
      <span className="min-w-0 leading-none">
        <span className="block truncate font-display text-[15px] font-semibold tracking-wide text-fg sm:text-lg">
          Construction Chemical
        </span>
        <span className="mt-0.5 block text-[0.65rem] font-medium uppercase tracking-[0.16em] text-muted">
          Document
        </span>
      </span>
    </span>
  );
}
