import { getTranslations } from "@/translations"
import { getProfileImage } from "@/api/getProfileImage"

export default async function Head({ params: { locale } }: any) {
  const t = getTranslations(locale)
  const profileImage = await getProfileImage()
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="icon" href="/common/favicon.svg"/>
      <base target="_blank"/>
      <title>{ t.Title }</title>
      <meta name="description" content={t.Description}/>
      <meta property="og:title" content={profileImage + ''}/>
      <meta property="og:description" content={t.Description}/>
    </>
  )
}
