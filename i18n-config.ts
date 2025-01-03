export const i18n = {
  defaultLocale: "se",
  locales: ["en", "se"]
} as const;

export type Locale = (typeof i18n)["locales"][number];
