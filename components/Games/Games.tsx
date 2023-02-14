import Image from 'next/image'
import { getTranslations } from '@/translations'
import { ClientScript } from '../ClientScript'

import './Games.css'
import st from './Games.module.css'

export const Games = () => {
  const t = getTranslations()
  return (
    <div className={st.videogames}>
      <Image className={st.videogamesImg} alt={t.Misc.FavouriteGames} src={t.Images.FavouriteGames} />
      <div id="grouvee_widget_738705"></div>
      <ClientScript src="https://www.grouvee.com/widgets/shelf/738705/?number=36" />
      <div className={st.videogamesLink}>
        <a href="https://www.grouvee.com/user/manvalls/shelves/738705-favourites/?utm_medium=api&utm_source=shelf_widget">
          <Image className={st.videogamesLinkImg} alt={t.Misc.MoreGames} src={t.Images.MoreGames} />
        </a>
      </div>
    </div>
  )
}
