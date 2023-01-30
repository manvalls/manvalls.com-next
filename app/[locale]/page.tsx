import st from './page.module.css'

import { Suspense } from 'react'

import { LanguagePicker } from '@/components/LanguagePicker'
import { Profile } from '@/components/Profile'
import { Hobbies } from '@/components/Hobbies'
import { Videos } from '@/components/Videos'
import { GameAccounts } from '@/components/GameAccounts'
import { MoviesAndTV } from '@/components/MoviesAndTV'
import { Games } from '@/components/Games'
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
      <Suspense fallback={null}>
        {/* @ts-expect-error Server Component */}
        <MoviesAndTV locale={locale} />
      </Suspense>
      <Games locale={locale} />
      <Separator />
      <Credits locale={locale} />
    </div>
  </>
}
