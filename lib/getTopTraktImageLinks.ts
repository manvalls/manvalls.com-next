import { getTraktFavourites } from "./getTraktFavourites"
import { getMoviePoster } from "./getMoviePoster"
import { getShowPoster } from "./getShowPoster"

export const getTopTraktImageLinks = async () => {
  const ratings = await getTraktFavourites()
  const ids: {[key: string]: boolean} = {}

  return Promise.all(ratings.map(async (rating: any) => {
    if (rating.movie && !ids[rating.movie.ids.tmdb]) {
      ids[rating.movie.ids.tmdb] = true
      const imageUrl = await getMoviePoster(rating.movie.ids.tmdb.toString())
      if (imageUrl) {
        return {
          imageUrl,
          link: `https://trakt.tv/movies/${rating.movie.ids.slug}`
        }
      }
    }

    if (rating.show && !ids[rating.show.ids.tmdb]) {
      ids[rating.show.ids.tmdb] = true
      const imageUrl = await getShowPoster(rating.show.ids.tmdb.toString())
      if (imageUrl) {
        return {
          imageUrl,
          link: `https://trakt.tv/shows/${rating.show.ids.slug}`
        }
      }
    }
  })).then(
    (links) => links.filter((link) => link)
  )
}
