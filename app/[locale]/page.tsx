import st from './page.module.css'

import { Profile } from '@/components/Profile'
import { Hobbies } from '@/components/Hobbies'
import { Videos } from '@/components/Videos'
import { Separator } from '@/components/Separator'
import { Quote } from '@/components/Quote'
import { Credits } from '@/components/Credits'

export default function Home({ params: { locale } }: any) {
  return <>
    <div id="modal-overlay" />
    <div className={st.topContainer}>
      <Profile locale={locale} />
      <Hobbies locale={locale} />
      <Videos />
      <Quote locale={locale} />
      <Separator />
      <Credits locale={locale} />
    </div>
  </>
}
