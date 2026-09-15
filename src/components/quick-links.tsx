import { Link } from "@tanstack/react-router";
import { Download, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { tx, ui } from "@/lib/copy";
import { useLang } from "@/lib/lang";
import { products, type Product } from "@/lib/products";

function Row({ product }: { product: Product }) {
  const { lang } = useLang();
  return (
    <li className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-line px-3 py-3 last:border-b-0 sm:gap-4 sm:px-4">
      <img
        src={product.cover}
        alt=""
        className="h-14 w-10 rounded-sm object-cover object-top shadow-sm sm:h-16 sm:w-12"
      />
      <Link to="/p/$slug" params={{ slug: product.slug }} className="min-w-0">
        <p className="truncate font-display text-xl font-semibold tracking-wide text-fg">
          {tx(lang, product.name)}
        </p>
        <p className="truncate text-xs text-muted sm:text-sm">{tx(lang, product.tagline)}</p>
      </Link>
      <div className="flex items-center gap-1 sm:gap-2">
        <Button asChild size="sm" variant="ghost" className="hidden sm:inline-flex">
          <Link to="/p/$slug" params={{ slug: product.slug }}>
            {tx(lang, ui.details)}
            <ChevronRight />
          </Link>
        </Button>
        <Button asChild size="sm">
          <a href={product.pdf} download={product.downloadName} aria-label={`${tx(lang, ui.download)} ${tx(lang, product.name)}`}>
            <Download />
            <span className="hidden sm:inline">{tx(lang, ui.download)}</span>
            <span className="sm:hidden">PDF</span>
          </a>
        </Button>
      </div>
    </li>
  );
}

export function QuickLinks() {
  const { lang } = useLang();
  return (
    <section id="downloads" className="scroll-mt-20">
      <div className="mb-4">
        <h2 className="font-display text-3xl font-semibold tracking-wide text-fg">
          {tx(lang, ui.quickTitle)}
        </h2>
        <p className="mt-1 text-sm text-muted">{tx(lang, ui.quickLead)}</p>
      </div>
      <ol className="overflow-hidden rounded-xl border border-line bg-surface shadow-card">
        {products.map((product) => (
          <Row key={product.slug} product={product} />
        ))}
      </ol>
    </section>
  );
}
