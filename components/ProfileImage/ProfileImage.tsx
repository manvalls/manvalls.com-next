import { getProfileImage } from '@/lib/getProfileImage'

type ProfileImageProps = {
  className?: string
}

export const ProfileImage = async ({ className }: ProfileImageProps) => {
  const profileImage = await getProfileImage()
  return (
    <img className={className} src={profileImage + ''} />
  )
}
