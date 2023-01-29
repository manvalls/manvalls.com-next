import Image from 'next/image'
import { getTranslations } from '@/translations'
import st from './Credits.module.css'

import FbImage from '@/public/common/fb.svg'
import YtImage from '@/public/common/yt.svg'
import GrImage from '@/public/common/gr.svg'
import TmdbImage from '@/public/common/tmdb.svg'
import TraktImage from '@/public/common/trakt.svg'
import GrouveeImage from '@/public/common/grouvee.png'

type CreditsProps = {
  locale: 'es'|'en'
}

export const Credits = ({ locale }: CreditsProps) => {
  const t = getTranslations(locale)
  return (
    <div className={st.credits}>
      <Image alt={t.Misc.PoweredBy} src={t.Images.PoweredBy} className={st.titleImage} />
      <div>
        <a href="https://www.facebook.com/">
          <Image alt={t.Misc.Facebook} src={FbImage} width={70} />
        </a>
        <a href="https://www.youtube.com/">
          <Image alt={t.Misc.Youtube} src={YtImage} width={70} />
        </a>
        <a href="https://www.goodreads.com/">
          <Image alt={t.Misc.Goodreads} src={GrImage} width={70} />
        </a>
        <a href="https://www.themoviedb.org/">
          <Image alt={t.Misc.TMDB} src={TmdbImage} width={70} />
        </a>
        <a href="https://www.trakt.tv/">
          <Image alt={t.Misc.Trakt} src={TraktImage} width={70} />
        </a>
        <a href="https://www.grouvee.com/">
          <Image alt={t.Misc.Grouvee} src={GrouveeImage} width={70} />
        </a>
      </div>
    </div>
  )
}
