import Image from 'next/image'
import st from './GameAccounts.module.css'
import { getTranslations } from '@/translations'

import xboxImage from '@/public/common/logos/xbox.svg'
import oculusImage from '@/public/common/logos/oculus.svg'
import vrchatImage from '@/public/common/logos/vrchat.svg'
import steamImage from '@/public/common/logos/steam.svg'
import riotImage from '@/public/common/logos/riot.svg'
import epicImage from '@/public/common/logos/epic.svg'
import eaImage from '@/public/common/logos/ea.svg'
import ubisoftImage from '@/public/common/logos/ubisoft.svg'
import gogImage from '@/public/common/logos/gog.svg'
import chessImage from '@/public/common/logos/chess.svg'

import { Socials } from '@/components/Socials'

type GameAccountsProps = {
  locale: string
}

export const GameAccounts = ({ locale }: GameAccountsProps) => {
  const t = getTranslations(locale)
  return (
    <div className={st.gameAccounts}>
      <Image alt={t.Misc.GameAccounts} src={t.Images.GameAccounts} className={st.gameAccountsImg} />
      <Socials
        center
        socials={[
          {
            href: 'https://account.xbox.com/profile?gamertag=manvalls',
            alt: t.Social.Xbox,
            icon: xboxImage,
            width: 31,
            title: 'manvalls',
          },
          {
            href: 'https://www.oculus.com/deeplink/?action=view&path=%2Fprofile%2F101811735605449&utm_medium=share&utm_source=oculus',
            alt: t.Social.Oculus,
            icon: oculusImage,
            title: 'manvalls',
          },
          {
            href: 'https://vrchat.com/home/user/usr_fd567cee-ecb4-43c0-8d99-61917763daec',
            alt: t.Social.VRChat,
            icon: vrchatImage,
            title: 'manvalls',
            width: 31,
          },
          {
            href: 'https://steamcommunity.com/id/manvalls/',
            alt: t.Social.Steam,
            icon: steamImage,
            title: 'manvalls',
          },
          {
            modal: {
              label: `${t.Social.RiotLabel}: manvalls#1992`,
              value: 'manvalls#1992',
            },
            alt: t.Social.Riot,
            title: 'manvalls#1992',
            width: 31,
            icon: riotImage,
          },
          {
            href: 'https://store.epicgames.com/es-ES/u/b1f9ee78eae247ce9cb0254e2577b6a2',
            alt: t.Social.Epic,
            title: 'manvalls',
            icon: epicImage,
            width: 31,
          },
          {
            modal: {
              label: `${t.Social.EALabel}: manvallsf`,
              value: 'manvallsf',
            },
            alt: t.Social.EA,
            title: 'manvallsf',
            icon: eaImage,
            width: 27,
          },
          {
            href: 'https://ubisoftconnect.com/es-ES/profile/manvalls/',
            alt: t.Social.Ubisoft,
            title: 'manvalls',
            icon: ubisoftImage,
            width: 31,
          },
          {
            href: 'https://www.gog.com/u/manvalls',
            alt: t.Social.GOG,
            title: 'manvalls',
            icon: gogImage,
            width: 31,
          },
          {
            href: 'https://www.chess.com/member/manvalls',
            alt: t.Social.Chess,
            title: 'manvalls',
            icon: chessImage,
            width: 31,
          },
        ]}
      />
    </div>
  )
}
