import { Locale } from "@/i18n-config";
import "server-only";

const dictionaries = {
  se: () =>
    import("../../dictionaries/se.json").then((module) => module.default),
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default)
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
