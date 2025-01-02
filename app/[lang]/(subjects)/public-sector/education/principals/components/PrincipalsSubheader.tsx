import React from "react";

export default function PrincipalsSubheader({
  dateTimeOfExtract
}: Readonly<{ dateTimeOfExtract: string }>) {
  return (
    <time dateTime={dateTimeOfExtract} suppressHydrationWarning>
      {dateTimeOfExtract}
    </time>
  );
}
