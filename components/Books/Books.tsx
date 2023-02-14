import Image from 'next/image'
import { getTranslations } from '@/translations'
import { ClientScript } from '../ClientScript'

import './Books.css'
import st from './Books.module.css'

export const Books = () => {
  const t = getTranslations()
  return (
    <div className={st.books}>
      <Image className={st.booksImg} alt={t.Misc.FavouriteBooks} src={t.Images.FavouriteBooks} />
      <div id="gr_grid_widget_1643220741" />
      <ClientScript src="https://www.goodreads.com/review/grid_widget/146308828.Manuel's%20favourites%20book%20montage?cover_size=medium&hide_link=&hide_title=&num_books=20&order=a&shelf=favourites&sort=date_added&widget_id=1643220741" />
      <div className={st.booksLink}>
        <a href="https://www.goodreads.com/user/show/146308828-manuel-valls-fern-ndez">
          <Image className={st.booksLinkImg} alt={t.Misc.MoreBooks} src={t.Images.MoreBooks} />
        </a>
      </div>
    </div>
  )
}
