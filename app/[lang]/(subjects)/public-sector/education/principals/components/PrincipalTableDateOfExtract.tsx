import React from "react";

export default function PrincipalTableDateOfExtract({
  dateOfExtract
}: Readonly<{ dateOfExtract: string }>) {
  return (
    <time dateTime={dateOfExtract} suppressHydrationWarning>
      {dateOfExtract}
    </time>
  );
}
