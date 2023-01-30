import st from './page.module.css'

import { LanguagePicker } from '@/components/LanguagePicker'
import { Profile } from '@/components/Profile'
import { Hobbies } from '@/components/Hobbies'
import { Videos } from '@/components/Videos'
import { GameAccounts } from '@/components/GameAccounts'
import { Separator } from '@/components/Separator'
import { Quote } from '@/components/Quote'
import { Credits } from '@/components/Credits'

import { getTranslations } from '@/translations'

export default function Home({ params: { locale } }: any) {
  const t = getTranslations(locale)
  return <>
    <div className={st.topContainer}>
      <LanguagePicker locale={locale} alt={{ es: t.Languages.Spanish, en: t.Languages.English }} />
      <Profile locale={locale} />
      <Hobbies locale={locale} />
      <Videos />
      <Quote locale={locale} />
      <GameAccounts locale={locale} />
      <Separator />
      <Credits locale={locale} />
    </div>
  </>
}
