import { Phone, Mail, MapPin } from "lucide-react";
import { tx, ui } from "@/lib/copy";
import { useLang } from "@/lib/lang";

export function SiteFooter() {
  const { lang } = useLang();

  return (
    <footer className="border-t border-line bg-ink text-brand-ink">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold tracking-wide">{tx(lang, ui.appName)}</p>
          <p className="mt-1 text-sm text-ink-muted">{tx(lang, ui.library)}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">{tx(lang, ui.footerNote)}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
            {tx(lang, ui.contactTitle)}
          </p>
          <p className="mt-3 font-medium">{tx(lang, ui.company)}</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-muted">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>{tx(lang, ui.address)}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0" />
              <span>
                {tx(lang, ui.phone)}
                <br />
                {tx(lang, ui.hotline)}
              </span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0" />
              <a className="underline-offset-2 hover:text-brand-ink hover:underline" href="mailto:Contact@scg.com">
                {tx(lang, ui.email)}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
