import Image from 'next/image'
import st from './MoviesAndTV.module.css'
import { getTopTraktImageLinks } from '@/lib/getTopTraktImageLinks'
import { getTranslations } from '@/translations'

export const MoviesAndTV = async () => {
  const t = getTranslations()
  const topTraktImageLinks =  await getTopTraktImageLinks()

  return (
    <div className={st.watchRecommendations}>
      <Image className={st.watchRecommendationsImg} alt={t.Misc.FavouriteMovies} src={t.Images.FavouriteMovies} />
      <div className={st.topTrakt}>
        {topTraktImageLinks.map((link) => (
          <>
            <a href={link.link} key={link.link}>
              <img className={st.topTraktImg} src={link.imageUrl} />
            </a>
            {' '}
          </>
        ))}
      </div>
      <div className={st.topTraktLink}>
        <a href="https://trakt.tv/users/manvalls/lists/favourites">
          <Image alt={t.Misc.MoreMovies} src={t.Images.MoreMovies} className={st.topTraktLinkImage} />
        </a>
      </div>
    </div>
  )
}
