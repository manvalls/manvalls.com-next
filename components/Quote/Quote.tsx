import Image from 'next/image'
import Script from 'next/script'
import st from './Quote.module.css'
import { getTranslations } from '@/translations'

import { Special_Elite } from '@next/font/google'
const specialElite = Special_Elite({ weight: '400', subsets: ['latin'] })

type QuoteProps = {
  locale: string
}

export const Quote = ({ locale }: QuoteProps) => {
  const t = getTranslations(locale)
  return (
    <div className={`${st.quote} ${specialElite.className}`}>
      <div id="gr_quote_body"></div>
      <Script src='https://www.goodreads.com/quotes/widget/146308828-manuel-valls-fern-ndez?v=2' />
      <div className={st.quotesLink}>
        <a href="https://www.goodreads.com/quotes/list/146308828-manuel-valls-fern-ndez">
          <Image className={st.quotesLinkImg} alt={t.Misc.MoreQuotes} src={t.Images.MoreQuotes} />
        </a>
      </div>
    </div>
  )
}
