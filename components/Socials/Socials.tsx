import Image from 'next/image'
import st from './Socials.module.css'

type ModalProps = {
  label: string
  value: string
}

type SocialLink = {
  href: string
  alt: string
  icon: string
  title?: string
  borderless?: boolean
  modal?: ModalProps
}

type SocialsProps = {
  socials: SocialLink[]
  center?: boolean
}

export const Socials = ({ socials, center }: SocialsProps) => {
  return (
    <div className={`${st.social} ${center ? st.center : ''}`}>
      {socials.map((social) => (
        <a href={social.href} title={social.title} key={social.href}>
          <Image width={social.borderless ? 31 : 35} className={`${st.img} ${social.borderless ? st.borderless : ''}`} alt={social.alt} src={social.icon} />
        </a>
      ))}
    </div>
  )
}
