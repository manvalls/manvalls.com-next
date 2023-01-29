
export const getFbToken = async () => {
  const res = await fetch(
    'https://graph.facebook.com/oauth/access_token?client_id=' +
    process.env.FB_CLIENT_ID +
    '&client_secret=' +
    process.env.FB_CLIENT_SECRET +
    '&grant_type=client_credentials',
    { next: { revalidate: 3600 } }
  )

  const token = await res.json()
  return token
}
