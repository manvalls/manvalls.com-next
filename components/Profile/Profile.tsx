import Image from 'next/image'
import { ProfileImage } from '@/components/ProfileImage'
import { Socials } from '@/components/Socials'

import nameImage from '@/public/common/nombre.svg'

import instagramImage from '@/public/common/logos/instagram.svg'
import twitterImage from '@/public/common/logos/twitter.svg'
import githubImage from '@/public/common/logos/github.svg'
import discordImage from '@/public/common/logos/discord.svg'
import facebookImage from '@/public/common/logos/facebook.svg'
import linkedinImage from '@/public/common/logos/linkedin.svg'
import redditImage from '@/public/common/logos/reddit.svg'
import youtubeImage from '@/public/common/logos/youtube.svg'
import lastfmImage from '@/public/common/logos/lastfm.svg'
import traktImage from '@/public/common/logos/trakt.svg'
import goodreadsImage from '@/public/common/logos/goodreads.svg'
import grouveeImage from '@/public/common/logos/grouvee.svg'

import { getTranslations } from '@/translations'
import st from './Profile.module.css'

type ProfileProps = {
  locale: string
}

export const Profile = ({ locale }: ProfileProps) => {
  const t = getTranslations(locale)
  return (
    <div className={st.profileRow}>
      <div className={st.profilePic}>
        {/* @ts-expect-error Server Component */}
        <ProfileImage className={st.profilePicImage} />
      </div>
      <div className={st.nameAndSocial}>
        <Image className={st.name} alt={t.Title} src={nameImage} />
        <Socials
          socials={[
            {
              href: 'https://www.instagram.com/manvalls/',
              alt: t.Social.Instagram,
              icon: instagramImage,
              title: 'manvalls',
            },
            {
              href: 'https://twitter.com/manvalls',
              alt: t.Social.Twitter,
              icon: twitterImage,
              title: '@lazymanuel',
            },
            {
              href: 'https://github.com/manvalls',
              alt: t.Social.Github,
              icon: githubImage,
              title: 'manvalls',
            },
            {
              href: 'https://discordapp.com/users/568501799368261632',
              alt: t.Social.Discord,
              icon: discordImage,
              title: 'manvalls#4916',
            },
            {
              href: 'https://www.facebook.com/mvallsfernandez/',
              alt: t.Social.Facebook,
              icon: facebookImage,
              title: 'Manuel Valls Fernández',
            },
            {
              href: 'https://www.linkedin.com/in/manvalls/',
              alt: t.Social.Linkedin,
              icon: linkedinImage,
              title: 'Manuel Valls Fernández',
            },
            {
              href: 'https://www.reddit.com/user/manvalls',
              alt: t.Social.Reddit,
              icon: redditImage,
              title: 'manvalls',
              borderless: true,
            },
            {
              href: 'https://www.youtube.com/channel/UClU46N1TBLLbJMh1wMN-yNw',
              alt: t.Social.YouTube,
              icon: youtubeImage,
              title: 'manvalls',
              borderless: true,
            },
            {
              href: 'https://www.last.fm/user/manvalls',
              alt: t.Social.Lastfm,
              icon: lastfmImage,
              title: 'manvalls',
            },
            {
              href: 'https://trakt.tv/users/manvalls',
              alt: t.Social.Trakt,
              icon: traktImage,
              title: 'manvalls',
            },
            {
              href: 'https://goodreads.com/manvalls',
              alt: t.Social.Goodreads,
              icon: goodreadsImage,
              title: 'manvalls',
            },
            {
              href: 'https://www.grouvee.com/user/manvalls/',
              alt: t.Social.Grouvee,
              icon: grouveeImage,
              title: 'manvalls',
              borderless: true,
            },
          ]}
        />
      </div>
    </div>
  )
}
