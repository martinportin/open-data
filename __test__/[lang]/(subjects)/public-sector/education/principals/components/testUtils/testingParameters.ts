import { Locale } from "@/i18n-config";

export const locales = new Map<Locale, RegExp>();
locales.set("en", /Number of principals \(7\)/i);
locales.set("se", /Antal \(7\)/i);

export const principalOrganizationNumbers = [
  "0000000001",
  "0000000002",
  "0000000003",
  "0000000004",
  "0000000005",
  "0000000006",
  "0000000007"
];

export const principalNames = [
  "Principal 1",
  "Principal 2",
  "Principal 3",
  "Principal 4",
  "Principal 5",
  "Principal 6",
  "Principal 7"
];
