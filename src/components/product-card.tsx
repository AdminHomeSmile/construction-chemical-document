import { Link } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { tx, ui } from "@/lib/copy";
import { useLang } from "@/lib/lang";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { lang } = useLang();

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-card">
      <Link
        to="/p/$slug"
        params={{ slug: product.slug }}
        className="relative block overflow-hidden bg-ink"
      >
        <img
          src={product.cover}
          alt={tx(lang, product.name)}
          className="aspect-cover w-full object-cover object-top transition-transform duration-300 ease-out hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 rounded-sm bg-brand px-2 py-1 font-display text-sm font-semibold tracking-wide text-brand-ink">
          {product.code}
        </span>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">{tx(lang, product.docType)}</p>
          <h3 className="mt-1 font-display text-2xl font-semibold leading-none tracking-wide text-fg">
            {tx(lang, product.name)}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{tx(lang, product.tagline)}</p>
        </div>
        <p className="text-xs text-muted">
          {product.pages} {tx(lang, ui.pages)} · {tx(lang, product.pack)}
        </p>
        <div className="mt-auto grid grid-cols-2 gap-2">
          <Button asChild size="sm" variant="outline">
            <Link to="/p/$slug" params={{ slug: product.slug }}>
              <FileText />
              {tx(lang, ui.details)}
            </Link>
          </Button>
          <Button asChild size="sm">
            <a href={product.pdf} download={product.downloadName}>
              <Download />
              PDF
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
