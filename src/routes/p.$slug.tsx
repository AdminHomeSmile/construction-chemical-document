import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { tx, ui } from "@/lib/copy";
import { useLang } from "@/lib/lang";
import { getProduct, relatedProducts } from "@/lib/products";

export const Route = createFileRoute("/p/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  component: ProductPage,
  notFoundComponent: ProductNotFound,
});

function ProductNotFound() {
  const { lang } = useLang();
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader solid />
      <main className="mx-auto max-w-xl px-4 py-24 text-center">
        <p className="text-sm text-muted">{tx(lang, ui.empty)}</p>
        <Button asChild className="mt-6">
          <Link to="/">{tx(lang, ui.back)}</Link>
        </Button>
      </main>
    </div>
  );
}

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { lang } = useLang();
  const related = relatedProducts(product);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader solid />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <Link
          to="/"
          className="inline-flex h-11 items-center gap-2 text-sm font-medium text-muted hover:text-fg"
        >
          <ArrowLeft className="size-4" />
          {tx(lang, ui.back)}
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="overflow-hidden rounded-xl border border-line bg-ink shadow-card">
            <img
              src={product.cover}
              alt={tx(lang, product.name)}
              className="w-full object-cover object-top"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              {tx(lang, product.docType)} · {product.pages} {tx(lang, ui.pages)}
            </p>
            <h1 className="mt-2 font-display text-5xl font-semibold leading-none tracking-wide">
              {tx(lang, product.name)}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              {tx(lang, product.tagline)}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Button asChild size="lg">
                <a href={product.pdf} download={product.downloadName}>
                  <Download />
                  {tx(lang, ui.download)}
                </a>
              </Button>
              <Button asChild size="lg" variant="ink">
                <Link to="/view/$slug" params={{ slug: product.slug }}>
                  <ExternalLink />
                  {tx(lang, ui.openPdf)}
                </Link>
              </Button>
            </div>

            <dl className="mt-8 grid gap-3 sm:grid-cols-3">
              <Meta label={tx(lang, ui.pack)} value={tx(lang, product.pack)} />
              <Meta label={tx(lang, ui.color)} value={tx(lang, product.color)} />
              <Meta label={tx(lang, ui.shelf)} value={tx(lang, product.shelf)} />
            </dl>

            <h2 className="mt-10 font-display text-2xl font-semibold tracking-wide">
              {tx(lang, ui.highlights)}
            </h2>
            <ul className="mt-3 grid gap-2">
              {product.highlights.map((item) => (
                <li
                  key={item.en}
                  className="flex gap-3 rounded-md border border-line bg-surface px-3 py-2.5 text-sm"
                >
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-brand" />
                  {tx(lang, item)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold tracking-wide">{tx(lang, ui.specs)}</h2>
          <div className="mt-4 overflow-hidden rounded-xl border border-line bg-surface">
            <table className="w-full text-sm">
              <tbody>
                {product.specs.map((row) => (
                  <tr key={row.label.en} className="border-b border-line last:border-b-0">
                    <th className="w-[38%] px-4 py-3 text-left align-top font-medium text-muted">
                      {tx(lang, row.label)}
                      {row.standard ? (
                        <span className="mt-0.5 block text-xs font-normal">{row.standard}</span>
                      ) : null}
                    </th>
                    <td className="px-4 py-3 align-top text-fg">{tx(lang, row.value)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-wide">
              {tx(lang, ui.applications)}
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-fg">
              {product.applications.map((item) => (
                <li key={item.en} className="border-b border-line py-2 last:border-b-0">
                  {tx(lang, item)}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            {product.mixing ? (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  {tx(lang, ui.mixing)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed">{tx(lang, product.mixing)}</p>
              </div>
            ) : null}
            {product.coverage ? (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  {tx(lang, ui.coverage)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed">{tx(lang, product.coverage)}</p>
              </div>
            ) : null}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                {tx(lang, ui.notes)}
              </h3>
              <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted">
                {product.notes.map((item) => (
                  <li key={item.en}>{tx(lang, item)}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="mt-14">
            <h2 className="font-display text-2xl font-semibold tracking-wide">
              {tx(lang, ui.related)}
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-line bg-surface px-4 py-3">
      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{label}</dt>
      <dd className="mt-1 text-sm leading-snug">{value}</dd>
    </div>
  );
}
