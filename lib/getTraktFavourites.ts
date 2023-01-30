
export const getTraktFavourites = async () => {
  const res = await fetch(`https://api.trakt.tv/users/${process.env.TRAKT_USER}/lists/favourites/items?limit=36`, {
    headers: {
      'trakt-api-version': '2',
      'trakt-api-key': process.env.TRAKT_API_KEY as any
    },
    next: {
      revalidate: 3600,
    },
  })

  const favourites = await res.json()
  return favourites
}
