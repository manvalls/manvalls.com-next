
export const getShowPoster = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.TMDB_API_KEY}`,
    { next: { revalidate: 3600 } }
  )

  const show = await res.json()

  if (show.poster_path) {
    return `https://image.tmdb.org/t/p/w154${show.poster_path}`
  }

  return ''
}
