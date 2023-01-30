
export const getMoviePoster = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`,
    { next: { revalidate: 3600 } }
  )

  const movie = await res.json()

  if (movie.poster_path) {
    return `https://image.tmdb.org/t/p/w154${movie.poster_path}`
  }

  return ''
}
