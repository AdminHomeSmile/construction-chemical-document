import { Link } from "@tanstack/react-router";
import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { tx, ui } from "@/lib/copy";
import { useLang } from "@/lib/lang";

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const { lang, setLang } = useLang();

  return (
    <header
      className={
        solid
          ? "sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur-sm"
          : "sticky top-0 z-40 border-b border-ink-soft bg-ink/95 backdrop-blur-sm"
      }
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/" className="min-w-0" aria-label={tx(lang, ui.library)}>
          <span className={solid ? "text-fg" : "[&_.text-fg]:text-brand-ink [&_.text-muted]:text-ink-muted"}>
            <BrandMark />
          </span>
        </Link>
        <div className="flex items-center gap-1 rounded-md border border-line/40 bg-surface/10 p-1">
          <Button
            type="button"
            size="sm"
            variant={lang === "th" ? "default" : "ghost"}
            className={lang === "th" ? "" : solid ? "text-muted" : "text-ink-muted hover:bg-ink-soft hover:text-brand-ink"}
            aria-pressed={lang === "th"}
            onClick={() => setLang("th")}
          >
            {tx(lang, ui.langTh)}
          </Button>
          <Button
            type="button"
            size="sm"
            variant={lang === "en" ? "default" : "ghost"}
            className={lang === "en" ? "" : solid ? "text-muted" : "text-ink-muted hover:bg-ink-soft hover:text-brand-ink"}
            aria-pressed={lang === "en"}
            onClick={() => setLang("en")}
          >
            {tx(lang, ui.langEn)}
          </Button>
        </div>
      </div>
    </header>
  );
}
