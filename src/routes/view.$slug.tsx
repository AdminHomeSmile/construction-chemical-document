import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { tx, ui } from "@/lib/copy";
import { useLang } from "@/lib/lang";
import { getProduct } from "@/lib/products";

export const Route = createFileRoute("/view/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  component: ViewerPage,
});

function ViewerPage() {
  const { product } = Route.useLoaderData();
  const { lang } = useLang();

  return (
    <div className="flex h-dvh flex-col bg-ink text-brand-ink">
      <header className="flex h-16 shrink-0 items-center justify-between gap-3 border-b border-ink-soft px-3 sm:px-5">
        <Link
          to="/p/$slug"
          params={{ slug: product.slug }}
          className="inline-flex h-11 min-w-11 items-center gap-2 text-sm text-ink-muted hover:text-brand-ink"
        >
          <ArrowLeft className="size-4" />
          <span className="hidden sm:inline">{tx(lang, product.name)}</span>
        </Link>
        <p className="truncate font-display text-lg font-semibold tracking-wide">
          {tx(lang, product.name)}
        </p>
        <Button asChild size="sm">
          <a href={product.pdf} download={product.downloadName}>
            <Download />
            <span className="hidden sm:inline">{tx(lang, ui.download)}</span>
            <span className="sm:hidden">PDF</span>
          </a>
        </Button>
      </header>
      <p className="shrink-0 bg-ink-soft px-4 py-2 text-center text-xs text-ink-muted">
        {tx(lang, ui.viewerHint)}
      </p>
      <iframe
        title={tx(lang, product.name)}
        src={`${product.pdf}#view=FitH`}
        className="min-h-0 w-full flex-1 bg-paper"
      />
    </div>
  );
}
