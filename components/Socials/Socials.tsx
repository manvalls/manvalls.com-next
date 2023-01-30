import Image from 'next/image'
import { Modal } from '@/components/Modal'
import { getTranslations } from '@/translations'
import st from './Socials.module.css'

type ModalProps = {
  label: string
  value: string
}

type SocialLink = {
  href?: string
  alt: string
  icon: string
  title?: string
  width?: number
  modal?: ModalProps
}

type SocialsProps = {
  socials: SocialLink[]
  center?: boolean
  locale: string
}

export const Socials = ({ socials, center, locale }: SocialsProps) => {
  const t = getTranslations(locale)
  return (
    <div className={`${st.social} ${center ? st.center : ''}`}>
      {socials.map((social) => {
        const component = (
          <Image width={social.width || 35} style={social.width ? {margin: `${6 + (35 - social.width) / 2}px`} : {}} className={st.img} alt={social.alt} src={social.icon} />
        )

        if (social.modal) {
          return (
            <Modal
              key={social.alt}
              className={st.link}
              label={social.modal.label}
              value={social.modal.value}
              copiedNotice={t.Social.CopiedMessage}
              copyButton={t.Social.CopyButton}
              closeButton={t.Social.CloseButton}
            >
              {component}
            </Modal>
          )
        }

        return (
          <a href={social.href} className={st.link} title={social.title} key={social.href}>
            {component}
          </a>
        )
      })}
    </div>
  )
}
