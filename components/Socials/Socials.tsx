import Image from 'next/image'
import { Modal } from '@/components/Modal'
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
}

export const Socials = ({ socials, center }: SocialsProps) => {
  return (
    <div className={`${st.social} ${center ? st.center : ''}`}>
      {socials.map((social) => {
        const component = (
          <Image width={social.width || 35} style={social.width ? {margin: `${6 + (35 - social.width) / 2}px`} : {}} className={st.img} alt={social.alt} src={social.icon} />
        )

        if (social.modal) {
          return (
            <Modal key={social.alt} className={st.link} label={social.modal.label} value={social.modal.value}>
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
