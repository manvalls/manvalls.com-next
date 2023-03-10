import Image from 'next/image';
import st from './Hobbies.module.css'
import { getTranslations } from '@/translations'

import { Noto_Sans } from '@next/font/google'
const notoSans = Noto_Sans({ weight: '400', subsets: ['latin'] })

export const Hobbies = () => {
  const t = getTranslations()
  return (
    <div className={st.hobbies}>
      <Image alt={t.Hobbies.Title} src={t.Images.Hobbies} />
      <div className={`${st.emojiList} ${notoSans.className}`}>
        {t.Hobbies.List.map((hobby) => (
          <div key={hobby.Description}>
            {hobby.Emoji} {hobby.Description}
          </div>
        ))}
      </div>
    </div>
  )
}
