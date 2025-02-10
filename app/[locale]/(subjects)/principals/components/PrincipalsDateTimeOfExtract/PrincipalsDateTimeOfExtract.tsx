export default function PrincipalsDateTimeOfExtract({
  dateTimeOfExtract
}: Readonly<{ dateTimeOfExtract: string }>) {
  return <time dateTime={dateTimeOfExtract}>{dateTimeOfExtract}</time>;
}
