import { getTranslations } from "@/translations"

export default async function Head({ params: { locale } }: any) {
  const t = getTranslations(locale)
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="icon" href="/favicon.svg"/>
      <base target="_blank"/>
      <title>{ t.Title }</title>
      <meta name="description" content={t.Description}/>
      <meta property="og:description" content={t.Description}/>
    </>
  )
}
