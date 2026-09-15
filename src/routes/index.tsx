import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { QuickLinks } from "@/components/quick-links";
import { ShareQr } from "@/components/share-qr";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { tx, ui } from "@/lib/copy";
import { useLang } from "@/lib/lang";
import { brands, searchProducts, type BrandId } from "@/lib/products";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { lang } = useLang();
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState<BrandId | "all">("all");
  const filtered = useMemo(() => searchProducts(query, brand), [query, brand]);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader />
      <section className="bg-ink text-brand-ink">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-muted">
            {tx(lang, ui.docsCount)} · {tx(lang, ui.version)}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-[0.95] tracking-wide sm:text-6xl">
            {tx(lang, ui.heroTitle)}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {tx(lang, ui.heroLead)}
          </p>
          <div className="mt-8 h-1 w-16 bg-brand" />
        </div>
      </section>

      <main className="mx-auto flex max-w-6xl flex-col gap-14 px-4 py-10 sm:px-6 sm:py-14">
        <QuickLinks />

        <section>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-wide">
                {tx(lang, ui.catalogTitle)}
              </h2>
            </div>
            <label className="relative block w-full sm:max-w-xs">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={tx(lang, ui.search)}
                className="h-11 w-full rounded-md border border-line bg-surface pl-10 pr-3 text-sm text-fg outline-none ring-brand/30 placeholder:text-muted focus:ring-2"
              />
            </label>
          </div>

          <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
            {brands.map((item) => {
              const active = brand === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setBrand(item.id)}
                  className={
                    active
                      ? "h-11 shrink-0 rounded-md bg-ink px-4 text-sm font-medium text-brand-ink"
                      : "h-11 shrink-0 rounded-md border border-line bg-surface px-4 text-sm font-medium text-fg hover:bg-paper"
                  }
                >
                  {tx(lang, item.label)}
                </button>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <p className="mt-10 rounded-xl border border-dashed border-line bg-surface px-6 py-16 text-center text-sm text-muted">
              {tx(lang, ui.empty)}
            </p>
          ) : (
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {filtered.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}
        </section>

        <ShareQr />
      </main>
      <SiteFooter />
    </div>
  );
}
