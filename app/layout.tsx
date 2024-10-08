import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open data",
  description: "Open data application"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
