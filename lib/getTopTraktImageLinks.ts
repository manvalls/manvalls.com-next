import { getTraktFavourites } from "./getTraktFavourites"
import { getMoviePoster } from "./getMoviePoster"
import { getShowPoster } from "./getShowPoster"

export const getTopTraktImageLinks = async () => {
  const ratings = await getTraktFavourites()
  const links = []
  const ids: {[key: string]: boolean} = {}

  for (const rating of ratings) {
    if (rating.movie && !ids[rating.movie.ids.tmdb]) {
      ids[rating.movie.ids.tmdb] = true
      const imageUrl = await getMoviePoster(rating.movie.ids.tmdb.toString())
      if (imageUrl) {
        links.push({
          imageUrl,
          link: `https://trakt.tv/movies/${rating.movie.ids.slug}`
        })
      }
    }

    if (rating.show && !ids[rating.show.ids.tmdb]) {
      ids[rating.show.ids.tmdb] = true
      const imageUrl = await getShowPoster(rating.show.ids.tmdb.toString())
      if (imageUrl) {
        links.push({
          imageUrl,
          link: `https://trakt.tv/shows/${rating.show.ids.slug}`
        })
      }
    }
  }

  return links
}
