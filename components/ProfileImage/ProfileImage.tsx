import { getProfileImage } from '@/api/getProfileImage'

type ProfileImageProps = {
  className?: string
}

export const ProfileImage = async ({ className }: ProfileImageProps) => {
  const profileImage = await getProfileImage()
  return (
    <img className={className} width={250} height={250} src={profileImage + ''} />
  )
}
