import { Check, Copy, Download, QrCode } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { tx, ui } from "@/lib/copy";
import { useLang } from "@/lib/lang";
import { PUBLIC_SITE_URL } from "@/lib/site";

export function ShareQr() {
  const { lang } = useLang();
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(PUBLIC_SITE_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="overflow-hidden rounded-xl border border-line bg-surface shadow-card">
      <div className="grid gap-0 md:grid-cols-[minmax(0,280px)_1fr]">
        <div className="flex items-center justify-center bg-paper p-6 md:p-8">
          <img
            src="/qr.png"
            alt={tx(lang, ui.qrTitle)}
            width={280}
            height={280}
            className="aspect-square w-full max-w-[240px] rounded-lg bg-surface object-contain"
          />
        </div>
        <div className="flex flex-col justify-center gap-5 border-t border-line p-6 md:border-l md:border-t-0 md:p-8">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              <QrCode className="size-3.5" />
              QR
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-wide">{tx(lang, ui.qrTitle)}</h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{tx(lang, ui.qrLead)}</p>
          </div>
          <p className="break-all rounded-md border border-line bg-paper px-3 py-2 font-mono text-xs text-fg">
            {PUBLIC_SITE_URL}
          </p>
          <div className="flex flex-wrap gap-2">
            <Button asChild>
              <a href="/qr.png" download="construction-chemical-document-qr.png">
                <Download />
                {tx(lang, ui.qrDownload)}
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/qr-card.jpg" download="construction-chemical-document-qr-poster.jpg">
                <Download />
                {tx(lang, ui.qrPoster)}
              </a>
            </Button>
            <Button type="button" variant="ink" onClick={() => void copyLink()}>
              {copied ? <Check /> : <Copy />}
              {copied ? tx(lang, ui.qrCopied) : tx(lang, ui.qrCopy)}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
