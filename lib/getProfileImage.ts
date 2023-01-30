import { getFbToken } from "./getFbToken"

export const getProfileImage = async () => {
  const token = await getFbToken()

  const url = 'https://graph.facebook.com/v12.0/' +
    process.env.FB_USER_ID +
    '/picture?height=320&access_token=' +
    token.access_token


  const res2 = await fetch(
    new Request(url, {redirect: 'manual'}),
    { next: { revalidate: 3600 } }
  )

  return res2.headers.get('location')
}
