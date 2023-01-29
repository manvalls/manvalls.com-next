import Image from 'next/image'
import Link from 'next/link';
import { useEffect } from 'react';
import st from './LanguagePicker.module.css'

import dotImage from '@/public/common/dot.svg'

import esLocale from '@/public/common/es.svg'
import esLocaleSelected from '@/public/common/es_selected.svg'

import enLocale from '@/public/common/en.svg'
import enLocaleSelected from '@/public/common/en_selected.svg'

type LanguagePickerProps = {
  locale: string;
  alt: {
    es: string;
    en: string;
  }
}

export const LanguagePicker = ({ locale, alt }: LanguagePickerProps) => {
  useEffect(() => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`
  }, [locale])
  
  return (
    <div className={st.languagePicker}>
      <Link className={st.languagePickerOption} href="/es" target='_self'>
        <Image
          height={25}
          alt={alt.es}
          tabIndex={0}
          src={locale === 'es' ? esLocaleSelected : esLocale}
        />
      </Link>
      <Image height={25} src={dotImage} alt="" />
      <Link className={st.languagePickerOption} href="/en" target='_self'>
        <Image
          height={25}
          alt={alt.en}
          tabIndex={0}
          src={locale === 'en' ? enLocaleSelected : enLocale}
        />
      </Link>
    </div>
  )
}
