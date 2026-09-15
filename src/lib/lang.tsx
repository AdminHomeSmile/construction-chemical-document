import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type Lang = "th" | "en";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("th");
  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((current) => (current === "th" ? "en" : "th")),
    }),
    [lang],
  );
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
