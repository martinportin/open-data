import { Locale } from "@/i18n-config";
import Link from "next/link";

export default function NavigationBar({
  lang,
  links
}: Readonly<{ lang: Locale; links: LinkData[] }>): JSX.Element {
  const navBarItems = links.map((link) => (
    <li key={link.url}>
      <Link href={`/${lang}/${link.url}`}>{link.name}</Link>
    </li>
  ));

  return (
    <nav>
      <ul>{navBarItems}</ul>
    </nav>
  );
}
