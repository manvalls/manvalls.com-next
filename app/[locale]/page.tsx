import st from './page.module.css'

import { Suspense } from 'react'

import { LanguagePicker } from '@/components/LanguagePicker'
import { Profile } from '@/components/Profile'
import { Hobbies } from '@/components/Hobbies'
import { Videos } from '@/components/Videos'
import { GameAccounts } from '@/components/GameAccounts'
import { MoviesAndTV } from '@/components/MoviesAndTV'
import { Games } from '@/components/Games'
import { Books } from '@/components/Books'
import { Separator } from '@/components/Separator'
import { Quote } from '@/components/Quote'
import { Credits } from '@/components/Credits'

import { getTranslations, setLocale } from '@/translations'

export default function Home({ params: { locale } }: any) {
  setLocale(locale)
  const t = getTranslations()
  return <>
    <div className={st.topContainer}>
      <LanguagePicker alt={{ es: t.Languages.Spanish, en: t.Languages.English }} locale={locale} />
      <Profile/>
      <Hobbies/>
      <Videos/>
      <Quote/>
      <GameAccounts/>
      <Suspense fallback={null}>
        {/* @ts-expect-error Server Component */}
        <MoviesAndTV/>
      </Suspense>
      <Games/>
      <Books/>
      <Separator/>
      <Credits/>
    </div>
  </>
}
